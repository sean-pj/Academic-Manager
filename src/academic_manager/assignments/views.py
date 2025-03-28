from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .serializers import AssignmentSerializer, CreateAssignmentSerializer
from .models import Assignments
from rest_framework.views import APIView
from rest_framework.response import Response

# View All Assignments (GET)
class AssignmentView(generics.ListAPIView):
    queryset = Assignments.objects.all()
    serializer_class = AssignmentSerializer

# Create Assignment (POST) 
class CreateAssignmentView(APIView):
    serializer_class = CreateAssignmentSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.validated_data.get('title')
            description = serializer.validated_data.get('description')
            due_date = serializer.validated_data.get('due_date')
            classroom = serializer.validated_data.get('classroom')
            weight = serializer.validated_data.get('weight')
            assignment = Assignments(title=title, description=description, due_date=due_date, classroom=classroom, weight=weight)
            assignment.save()
            return Response(AssignmentSerializer(assignment).data, status=status.HTTP_201_CREATED)

        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Update Assignment (MODIFY) 
class UpdateAssignmentView(APIView):
    serializer_class = CreateAssignmentSerializer

    def put(self, request, pk, format=None):
        assignment = get_object_or_404(Assignments, pk=pk)
        serializer = self.serializer_class(assignment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(AssignmentSerializer(assignment).data, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Delete Assignment (REMOVE) 
class DeleteAssignmentView(APIView):
    def delete(self, request, pk, format=None):
        assignment = get_object_or_404(Assignments, pk=pk)
        assignment.delete()
        return Response({'message': 'Assignment deleted successfully'}, status=status.HTTP_204_NO_CONTENT)