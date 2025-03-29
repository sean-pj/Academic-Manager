from rest_framework import serializers
from classroom.models import Classrooms
from teachers.serializers import TeacherSerializer 

class ClassroomSerializer(serializers.ModelSerializer):

    title = serializers.CharField(source="course.title", read_only=True)
    teacher = TeacherSerializer(read_only=True)

    class Meta:
        model = Classrooms
        # fields = ['id','sectionName', 'course', 'teacher', 'students', 'schedule']
        # fields = '__all__'
        fields = ['id','sectionName', 'schedule', 'title', 'teacher']
