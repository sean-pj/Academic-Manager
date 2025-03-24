# Using the (viewsets + DefaultRouter) for file handling [differs from traditional path for HTML pages]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubmissionViewSet

# Create a router and register viewset
# --DefaultRouter provides a router to handle URL routing 
router = DefaultRouter()
router.register(r'submissions', SubmissionViewSet)  # Register the SubmissionViewSet with the router

urlpatterns = [
    path('api/', include(router.urls)),
]
