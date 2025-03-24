from django.urls import path
from .views import GradesView, CreateGradesView, UpdateGradesView, DeleteGradesView

urlpatterns = [
    path('grades', GradesView.as_view()),  # View all grades
    path('create-grades', CreateGradesView.as_view()),  # Create a grade
    path('update-grades/<int:pk>/', UpdateGradesView.as_view()),  # Update a grade by primary #
    path('delete-grades/<int:pk>/', DeleteGradesView.as_view()),  # Delete a grade by primary #
]

