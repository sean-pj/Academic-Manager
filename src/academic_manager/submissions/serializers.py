from rest_framework import serializers
from submissions.models import Submissions

class SubmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Submissions
        #fields = ['id', 'comments', 'file', 'mark', 'grades', 'submitted_time']
        fields = '__all__'
