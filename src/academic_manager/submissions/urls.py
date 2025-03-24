from django.urls import path
from .views import SubmissionView, CreateSubmissionView, UpdateSubmissionView, DeleteSubmissionView

urlpatterns = [
    path('submissions', SubmissionView.as_view()),  # View all submissions
    path('create-submission', CreateSubmissionView.as_view()),  # Create a submission
    path('update-submission/<int:pk>/', UpdateSubmissionView.as_view()),  # Update a submission
    path('delete-submission/<int:pk>/', DeleteSubmissionView.as_view()),  # Delete a submission
]

