from rest_framework import serializers
from teachers.models import Teacher
from classroom.models import Classrooms
from students.models import Student
from django.contrib.auth.models import User


class TeacherSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)
    student_username = serializers.CharField(write_only=True)

    class Meta:
        model = Teacher
        # fields = '__all__'
        fields = ['id', 'username', 'first_name', 'last_name', 'date_of_birth', 'student_username']
        extra_kwargs = {
            'student_username': {'write_only': True},
        }

    def create(self, validated_data):
        request = self.context.get("request")
        if not request or not request.user.is_authenticated:
            raise serializers.ValidationError("User must be authenticated.")

        teacher = Teacher.objects.get(user=User.objects.get(id=request.user.id))

        classroom = Classrooms.objects.get(teacher=teacher)

        classroom.students.add(Student.objects.get(user=User.objects.get(username=validated_data.get("student_username",''))))

        return classroom
