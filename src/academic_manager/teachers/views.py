from django.shortcuts import render

#REST
from rest_framework import viewsets
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework.permissions import AllowAny   

# Create your views here.
def index(request):
    return render(request, "teachers/index.html")

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

    #Uncomment below, if you want access to BACKEND website access
    #permission_classes = [AllowAny]