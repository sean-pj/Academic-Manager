from rest_framework import serializers
from submissions.models import Submissions
from students.serializers import StudentSerializer
from assignments.serializers import AssignmentSerializer

class SubmissionSerializer(serializers.ModelSerializer):
    
    student = StudentSerializer(read_only=True)
    assignment = AssignmentSerializer(read_only=True)

    class Meta:
        model = Submissions
        #fields = ['id', 'comments', 'file', 'assignment', 'student', 'submitted_time']
        fields = '__all__'
        #fields = ['id', 'comments', 'file', 'submitted_time', 'student', 'assignment']
