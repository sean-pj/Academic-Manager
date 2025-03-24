from django.urls import path
from .views import AssignmentView, CreateAssignmentView, UpdateAssignmentView, DeleteAssignmentView

urlpatterns = [
    path('assignments', AssignmentView.as_view()),  # View all assignments
    path('create-assignments', CreateAssignmentView.as_view()),  # Create a assignment
    path('update-assignments/<int:pk>/', UpdateAssignmentView.as_view()),  # Update a assignment by primary #
    path('delete-assignments/<int:pk>/', DeleteAssignmentView.as_view()),  # Delete a assignment by primary #
]

