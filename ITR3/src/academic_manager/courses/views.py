from django.shortcuts import render

#REST
from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
def index(request):
    return render(request, "courses/index.html")

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = CourseSerializer