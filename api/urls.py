from rest_framework import routers

from .views import TodoListViewSet

router = routers.SimpleRouter()
router.register(r'todo-list', TodoListViewSet)

urlpatterns = router.urls