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
from rest_framework import exceptions
from django.core import signing
import datetime
from django.core.mail import EmailMessage
from .models import *


# class UserList(generics.ListAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


class SmallNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 1000


class IsPostOrIsAuthenticated(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return request.user and request.user.is_authenticated


class UserView(APIView):
    permission_classes = (IsPostOrIsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        try:
            verify = signing.loads(data["verify"])
        except signing.BadSignature:
            return Response("Wrong Verify code", status=status.HTTP_400_BAD_REQUEST)
        if not isinstance(verify.get('email'), str) or not isinstance(verify.get('time'), float):
            return Response("Wrong Verify code", status=status.HTTP_400_BAD_REQUEST)
        if data.get('email') != verify.get('email'):
            return Response("Wrong Verify code", status=status.HTTP_400_BAD_REQUEST)
        time = verify.get('time')
        if (datetime.datetime.now() - datetime.datetime.fromtimestamp(time)).total_seconds() > 3600:
            return Response("Verify code Expired", status = status.HTTP_400_BAD_REQUEST)
        try:
            User.objects.create_user(data['username'], password=data['password'], email=data['email'])
        except Exception:
            return Response("Worng request", status = status.HTTP_400_BAD_REQUEST)
        return Response("success")


class EmailAuthView(APIView):

    def post(self, request):
        email = request.data.get('email')
        if (email is None) or (not isinstance(email, str)):
            raise exceptions.ParseError(detail="email as string required")
        if not email.endswith('@snu.ac.kr'):
            raise exceptions.ParseError(detail="snu-mail required")
        data = signing.dumps({'email': email, 'time': datetime.datetime.now().timestamp()})
        try:
            email = EmailMessage("CoSNU 회원가입을 위한 인증메일",
                                 ("인증코드는 아래와 같습니다.\n\n%s\n\n위 코드를 회원가입 화면에 입력해 주시고,"
                                  " 한시간 안에 가입을 완료해주세요.") % data, to=[email])
            email.send()
        except Exception:
            return Response("Error To send mail", status=status.HTTP_400_BAD_REQUEST)
        return Response("success")


class RegisterView(generics.CreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorMakeSerializer
    permission_classes = (permissions.IsAuthenticated,)


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


class AuthorListView(generics.ListAPIView):
    serializer_class = AuthorMakeSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Author.objects.filter(user=self.request.user)


class IsOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class AuthorView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AuthorModifySerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner)

    def get_queryset(self):
        return Author.objects.filter(user=self.request.user)


class IsMemberOrOwner(permissions.BasePermission):

    def has_permission(self, request, view):
        return Author.objects.filter(user=request.user, lecture_id__exact=view.kwargs['lid']).first() is not None

    def has_object_permission(self, request, view, obj):

        if (request.method in permissions.SAFE_METHODS) or (view.action in ['comment', 'upvote', 'downvote', 'report']):
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
    def report(self, request, lid, pk):
        serializer = ReportSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(article=self.get_object())
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

