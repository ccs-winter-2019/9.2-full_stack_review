from rest_framework import serializers

from todos.models import TodoList, Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['title', ]


class TodoListSerializer(serializers.ModelSerializer):
    todos = TodoSerializer(many=True)

    class Meta:
        model = TodoList
        fields = ['title', 'todos']
        depth = 1

    def create(self, validated_data):
        todos_data = validated_data.pop('todos')
        todo_list = TodoList.objects.create(**validated_data)
        for todo_data in todos_data:
            Todo.objects.create(list=todo_list, **todo_data)
        return todo_list