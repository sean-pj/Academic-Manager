from rest_framework import serializers
from assignments.models import Assignments

class AssignmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Assignments
        #fields = ['id', 'title', 'description', 'due_date', 'submissions']
        fields = '__all__'

class CreateAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignments
        fields = ['title', 'description', 'due_date', 'submissions']
