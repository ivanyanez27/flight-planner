from django.urls import path
from . import views
from .views import UserCreate

urlpatterns = [
    path('hello-worlds/', views.hello_world, name='hello_world'),
    path('register/', UserCreate.as_view(), name='user_register'),    
]