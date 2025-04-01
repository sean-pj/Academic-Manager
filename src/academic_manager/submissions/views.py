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
    
    #Uncomment below, if you want access to BACKEND website access
    permission_classes = [AllowAny]

    def get_queryset(self):
        if (hasattr(self.request.user, 'student')):
            return Submissions.objects.filter(student=self.request.user.student)
        elif (hasattr(self.request.user, 'teacher')):
            return Submissions.objects.filter(assignment__classrooms__in=self.request.user.teacher.classrooms.assignments.all()).distinct()
        # else:
        #     return Submissions.objects.all()