from rest_framework import serializers
from grades.models import Grades
from submissions.serializers import SubmissionSerializer

class GradesSerializer(serializers.ModelSerializer):

    submission = SubmissionSerializer(read_only=True)

    class Meta:
        model = Grades
        #fields = ['id', 'comments', 'mark', 'submission']
        # fields = '__all__'
        fields = ['id', 'comments', 'mark', 'submission']
