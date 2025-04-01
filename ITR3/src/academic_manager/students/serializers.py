from rest_framework import serializers
from students.models import Student

class StudentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)

    class Meta:
        model = Student
        #fields = ['id', 'first_name', 'last_name', 'student_id', 'date_of_birth']
        fields = '__all__'
        fields = ['id', 'first_name', 'last_name', 'username', 'date_of_birth']
