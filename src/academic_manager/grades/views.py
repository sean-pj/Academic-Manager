from .serializers import GradesSerializer
from .models import Grades
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny       

# Create your views here.
def index(request):
    return render(request, "assignments/index.html")

class GradeView(viewsets.ModelViewSet):
    queryset = Grades.objects.all()
    serializer_class = GradesSerializer
    
    #Uncomment below, if you want access to BACKEND website access
    #permission_classes = [AllowAny]