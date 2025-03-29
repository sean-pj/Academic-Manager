from django.shortcuts import render

# REST framework
from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer  
from rest_framework.permissions import AllowAny    

# Create your views here.
def index(request):
    return render(request, "students/index.html")

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
    #Uncomment below, if you want access to BACKEND website access
    #permission_classes = [AllowAny]