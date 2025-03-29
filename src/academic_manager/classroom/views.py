from .serializers import ClassroomSerializer
from .models import Classrooms
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny       

# Create your views here.
def index(request):
    return render(request, "classroom/index.html")

class ClassroomView(viewsets.ModelViewSet):
    queryset = Classrooms.objects.all()
    serializer_class = ClassroomSerializer
    
    #Uncomment below, if you want access to BACKEND website access
    #permission_classes = [AllowAny]

    def get_queryset(self):
        return Classrooms.objects.filter(students=self.request.user.student)