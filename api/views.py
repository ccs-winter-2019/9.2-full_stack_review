from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from todos.models import TodoList

from .serializers import TodoListSerializer


class TodoListViewSet(ModelViewSet):
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer
