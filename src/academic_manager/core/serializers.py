from rest_framework import serializers
from django.contrib.auth.models import User
from students.models import Student
from teachers.models import Teacher
from rest_framework.validators import UniqueValidator

class UserSerializer(serializers.ModelSerializer):

    role = serializers.CharField(required=False)
    birthday = serializers.DateField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password', 'role', 'student', 'teacher', 'birthday']
        extra_kwargs = {
            'password': {'write_only': True},
            'student' : {'read_only' : True},
            'teacher' : {'read_only' : True}
        }

    def create(self, validated_data):
        birthday = validated_data.get('birthday', None)
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        if (validated_data.get('role', '') == "student"):
            student = Student.objects.create(user=user, date_of_birth=birthday)
        elif (validated_data.get('role', '') == "teacher"):
            teacher = Teacher.objects.create(user=user)

        return user