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
