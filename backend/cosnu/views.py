from django.shortcuts import render
from rest_framework import generics
from cosnu.serializers import UserSerializer
from django.contrib.auth.models import User



class UserList(generics.ListAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer

# Create your views here.
