from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import generics
from .serializers import UserSerializer

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello world!'})

User = get_user_model

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer