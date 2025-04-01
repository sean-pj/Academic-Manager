from rest_framework import serializers
from assignments.models import Assignments

class AssignmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Assignments
        # fields = ['id', 'title', 'description', 'due_date', 'classroom']
        # fields = '__all__'
        fields = ['id', 'title', 'description', 'due_date']
