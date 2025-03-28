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
    permission_classes = [AllowAny]