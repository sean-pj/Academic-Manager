from rest_framework import serializers
from django.contrib.auth.models import User
from students.models import Student
from teachers.models import Teacher

class UserSerializer(serializers.ModelSerializer):

    role = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', ''),
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        if (validated_data.get('role', '') == "student"):
            student = Student.objects.create(user=user)
        elif (validated_data.get('role', '') == "teacher"):
            teacher = Teacher.objects.create(user=user)

        return user