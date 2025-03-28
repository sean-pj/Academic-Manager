from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .serializers import ClassroomSerializer, CreateClassroomSerializer
from .models import Classrooms
from rest_framework.views import APIView
from rest_framework.response import Response

# View All Classrooms (GET)
class ClassroomView(generics.ListAPIView):
    queryset = Classrooms.objects.all()
    serializer_class = ClassroomSerializer

# Create Classroom (POST) 
class CreateClassroomView(APIView):
    serializer_class = CreateClassroomSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            sectionName = serializer.validated_data.get('sectionName')
            course = serializer.validated_data.get('course')
            teacher = serializer.validated_data.get('teacher')
            students = serializer.validated_data.get('students')
            schedule = serializer.validated_data.get('schedule')
            classroom = Classrooms(sectionName=sectionName, 
                                   course=course,
                                   teacher=teacher, 
                                   students=students,
                                   schedule=schedule)
            classroom.save()
            return Response(ClassroomSerializer(classroom).data, status=status.HTTP_201_CREATED)

        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Update Classroom (MODIFY) 
class UpdateClassroomView(APIView):
    serializer_class = CreateClassroomSerializer

    def put(self, request, pk, format=None):
        classroom = get_object_or_404(Classrooms, pk=pk)
        serializer = self.serializer_class(classroom, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(ClassroomSerializer(classroom).data, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Delete Classroom (REMOVE) 
class DeleteClassroomView(APIView):
    def delete(self, request, pk, format=None):
        classroom = get_object_or_404(Classrooms, pk=pk)
        classroom.delete()
        return Response({'message': 'Classroom deleted successfully'}, status=status.HTTP_204_NO_CONTENT)