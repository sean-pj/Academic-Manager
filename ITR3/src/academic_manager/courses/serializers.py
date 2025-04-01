from rest_framework import serializers
from courses.models import Course
from students.serializers import StudentSerializer
from teachers.serializers import TeacherSerializer

class CourseSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True)
    teachers = TeacherSerializer(many=True)

    class Meta:
        model = Course
        fields = '__all__'