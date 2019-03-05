from django.db import models


class TodoList(models.Model):
    title = models.CharField(max_length=255)


class Todo(models.Model):
    title = models.CharField(max_length=255)
    list = models.ForeignKey(TodoList, related_name='todos', on_delete=models.CASCADE)