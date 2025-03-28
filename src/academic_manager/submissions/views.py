from .serializers import SubmissionSerializer
from .models import Submissions
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny       

# Create your views here.
def index(request):
    return render(request, "assignments/index.html")

class SubmissionView(viewsets.ModelViewSet):
    queryset = Submissions.objects.all()
    serializer_class = SubmissionSerializer
    permission_classes = [AllowAny]