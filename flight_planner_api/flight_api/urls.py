from django.urls import path
from . import views

urlpatterns = [
    path('hello-worlds/', views.hello_world, name='hello_world')
]