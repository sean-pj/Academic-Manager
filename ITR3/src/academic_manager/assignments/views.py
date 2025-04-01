from .serializers import AssignmentSerializer
from .models import Assignments
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny       

# Create your views here.
def index(request):
    return render(request, "assignments/index.html")

class AssignmentView(viewsets.ModelViewSet):
    queryset = Assignments.objects.all()
    serializer_class = AssignmentSerializer
    
    #Uncomment below, if you want access to BACKEND website access
    #permission_classes = [AllowAny]