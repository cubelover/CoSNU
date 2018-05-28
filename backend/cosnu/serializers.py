from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ('id', 'name', 'semester', 'professor', 'code')


class AuthorSerializer(serializers.ModelSerializer):
    lecture = LectureSerializer(read_only=True)

    class Meta:
        model = Author
        fields = ('user', 'lecture', 'nickname', 'alias')


class UserSerializer(serializers.ModelSerializer):
    lectures = AuthorSerializer(source='author_set', read_only=True, many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'lectures')


class ArticleThumbSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')

    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'create_time')


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')

    class Meta:
        model = Comment
        fields = ('id', 'author', 'contents', 'create_time')


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')
    comments = CommentSerializer(source='comment_set', read_only=True, many=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'create_time', 'contents', 'comments')


class LectureArticleSerializer(serializers.ModelSerializer):
    articles = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Lecture
        fields = ('id', 'name', 'code', 'professor', 'semester', 'articles')

    def get_articles(self, obj):
        serializer = ArticleThumbSerializer(Article.objects.filter(author__lecture_id__exact=obj.id), many=True)
        return serializer.data


