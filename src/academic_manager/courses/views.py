from django.shortcuts import render

#REST
from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer

# Create your views here.
def index(request):
    return render(request, "courses/index.html")

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer