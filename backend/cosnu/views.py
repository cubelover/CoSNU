from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.views import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from cosnu.serializers import *
from django.shortcuts import *
from .models import *


# class UserList(generics.ListAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


class ProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class LectureView(APIView):

    def get(self, request, pk):
        serializer = LectureSerializer(get_object_or_404(Lecture, pk=pk))
        return Response(serializer.data)


class IsMemberOrOwner(permissions.BasePermission):

    def has_permission(self, request, view):
        return Author.objects.filter(user=request.user, lecture_id__exact=view.kwargs['lid']).first() is not None

    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author.user == request.user


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsMemberOrOwner)

    def get_queryset(self):
        return Article.objects.filter(author__lecture_id__exact=self.kwargs['lid'])

    def get_serializer_class(self):
        if self.action == 'list':
            return ArticleThumbSerializer
        return ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=Author.objects.get(user=self.request.user, lecture_id__exact=self.kwargs['lid']))

