from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator
from .models import *


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ('id', 'name', 'semester', 'professor', 'code', 'credit')


class AuthorSerializer(serializers.ModelSerializer):
    lecture = LectureSerializer(read_only=True)

    class Meta:
        model = Author
        fields = ('user', 'lecture', 'nickname', 'alias')


class AuthorMakeSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Author
        fields = ('user', 'lecture', 'nickname', 'alias')
        validators = [
            UniqueTogetherValidator(
                queryset=Author.objects.all(),
                fields=('user', 'lecture')
            )
        ]


class UserSerializer(serializers.ModelSerializer):
    lectures = AuthorSerializer(source='author_set', read_only=True, many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'lectures')


class ArticleThumbSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')
    comments = serializers.SerializerMethodField()
    upvotes = serializers.SerializerMethodField()
    downvotes = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'create_time', 'comments', 'upvotes', 'downvotes')

    def get_upvotes(self, instance):
        return instance.upvote.count()

    def get_downvotes(self, instance):
        return instance.downvote.count()

    def get_comments(self, instance):
        return instance.comment_set.count()


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')

    class Meta:
        model = Comment
        fields = ('id', 'author', 'contents', 'create_time')


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(read_only=True, slug_field='nickname')
    comments = serializers.SerializerMethodField()
    upvotes = serializers.SerializerMethodField()
    downvotes = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ('id', 'title', 'author', 'create_time', 'contents', 'comments', 'upvotes', 'downvotes')

    def get_upvotes(self, instance):
        return instance.upvote.count()

    def get_downvotes(self, instance):
        return instance.downvote.count()

    def get_comments(self, instance):
        comms = instance.comment_set.all().order_by('id')
        return CommentSerializer(comms, many=True).data


class LectureArticleSerializer(serializers.ModelSerializer):
    articles = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Lecture
        fields = ('id', 'name', 'code', 'professor', 'semester', 'articles')

    def get_articles(self, obj):
        serializer = ArticleThumbSerializer(Article.objects.filter(author__lecture_id__exact=obj.id), many=True)
        return serializer.data


class ReportSerializer(serializers.ModelSerializer):
    reporter = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Report
        fields = ('id', 'title', 'reporter', 'contents', 'create_time')

