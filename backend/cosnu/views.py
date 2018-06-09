from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.views import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from cosnu.serializers import *
from django.shortcuts import *
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import *


# class UserList(generics.ListAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


class SmallNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000


class ProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class LectureView(APIView):

    def get(self, request, pk):
        serializer = LectureSerializer(get_object_or_404(Lecture, pk=pk))
        return Response(serializer.data)


class LectureListView(generics.ListAPIView):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
    permission_classes = (permissions.IsAuthenticated,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('name', 'code')
    pagination_class = SmallNumberPagination


class IsMemberOrOwner(permissions.BasePermission):

    def has_permission(self, request, view):
        return Author.objects.filter(user=request.user, lecture_id__exact=view.kwargs['lid']).first() is not None

    def has_object_permission(self, request, view, obj):

        if (request.method in permissions.SAFE_METHODS) or (view.action in ['comment', 'upvote', 'downvote']):
            return True

        return obj.author.user == request.user


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsMemberOrOwner)
    pagination_class = SmallNumberPagination

    def get_queryset(self):
        return Article.objects.filter(author__lecture_id__exact=self.kwargs['lid']).order_by('-id')

    def get_serializer_class(self):
        if self.action == 'list':
            return ArticleThumbSerializer
        return ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=Author.objects.get(user=self.request.user, lecture_id__exact=self.kwargs['lid']))

    @action(methods=['POST'], detail=True)
    def comment(self, request, lid, pk):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=Author.objects.get(user=self.request.user, lecture_id__exact=lid),
                            article=self.get_object())
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['POST'], detail=True)
    def upvote(self, request, lid, pk):
        article = self.get_object()
        if article.upvote.filter(pk=self.request.user.pk).count() == 1:
            return Response("already upvote", status=status.HTTP_400_BAD_REQUEST)
        else:
            article.upvote.add(self.request.user)
            return Response("success", status=status.HTTP_201_CREATED)

    @action(methods=['POST'], detail=True)
    def downvote(self, request, lid, pk):
        article = self.get_object()
        if article.downvote.filter(pk=self.request.user.pk).count() == 1:
            return Response("already downvote", status=status.HTTP_400_BAD_REQUEST)
        else:
            article.downvote.add(self.request.user)
            return Response("success", status=status.HTTP_201_CREATED)




'''class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = ()

    def get_queryset(self):
        return Comment.objects.filter()
        return Article.objects.filter(author__lecture_id__exact=self.kwargs['lid'])

    def get_serializer_class(self):
        if self.action == 'list':
            return ArticleThumbSerializer
        return ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=Author.objects.get(user=self.request.user, lecture_id__exact=self.kwargs['lid']))
'''
