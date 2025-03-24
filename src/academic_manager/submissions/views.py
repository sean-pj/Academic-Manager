from django.shortcuts import render

# REST framework
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Submissions
from .serializers import SubmissionSerializer

# Create your views here.
def index(request):
    return render(request, "classroom/index.html")

# 'viewsets.ModelViewSet' automatically provides the basic actions (create, destroy, etc...)
class SubmissionViewSet(viewsets.ModelViewSet):

    # Defines the objects and class it looks at
    queryset = Submissions.objects.all()
    serializer_class = SubmissionSerializer

    # Permits file uploads
    parser_classes = (MultiPartParser, FormParser)