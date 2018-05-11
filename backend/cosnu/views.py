from django.shortcuts import render
from rest_framework import generics
from cosnu.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.views import Response
from rest_framework.views import APIView


#class UserList(generics.ListAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


class Profile(APIView):
	permission_classes = (permissions.IsAuthenticated,)

	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response(serializer.data)