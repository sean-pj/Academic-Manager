from django.shortcuts import render

#REST
from rest_framework import viewsets
from .models import Teacher
from .serializers import TeacherSerializer

# Create your views here.
def index(request):
    return render(request, "teachers/index.html")

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer