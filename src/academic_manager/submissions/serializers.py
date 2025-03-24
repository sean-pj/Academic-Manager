from rest_framework import serializers
from submissions.models import Submissions

class SubmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Submissions
        #fields = ['id', 'comments', 'file', 'grades', 'submitted_time']
        fields = '__all__'

class CreateSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submissions
        fields = ['comments', 'file', 'grades']
