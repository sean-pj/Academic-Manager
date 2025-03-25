from rest_framework import serializers
from classroom.models import Classrooms

class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classrooms
        #fields = ['id', 'sectionName', 'teacher', 'students', 'assignments', 'schedule']
        fields = '__all__'

class CreateClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classrooms
        fields = ['sectionName', 'teacher', 'students', 'assignments', 'schedule']
