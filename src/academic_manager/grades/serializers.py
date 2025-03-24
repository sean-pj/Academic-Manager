from rest_framework import serializers
from grades.models import Grades

class GradesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grades
        #fields = ['id', 'comments', 'grades']
        fields = '__all__'

class CreateGradesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grades
        fields = ['comments', 'grades']
