from django.urls import path
from .views import ClassroomView, CreateClassroomView, UpdateClassroomView, DeleteClassroomView

urlpatterns = [
    path('classroom', ClassroomView.as_view()),  # View all classrooms
    path('create-classroom', CreateClassroomView.as_view()),  # Create a classroom
    path('update-classroom/<int:pk>/', UpdateClassroomView.as_view()),  # Update a classroom by primary #
    path('delete-classroom/<int:pk>/', DeleteClassroomView.as_view()),  # Delete a classroom by primary #
]

