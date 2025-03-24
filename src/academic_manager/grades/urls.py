from django.urls import path
from .views import GradesView, CreateGradesView, UpdateGradesView, DeleteGradesView

urlpatterns = [
    path('submissions', GradesView.as_view()),  # View all submissions
    path('create-submission', CreateGradesView.as_view()),  # Create a submission
    path('update-submission/<int:pk>/', UpdateGradesView.as_view()),  # Update a submission
    path('delete-submission/<int:pk>/', DeleteGradesView.as_view()),  # Delete a submission
]

