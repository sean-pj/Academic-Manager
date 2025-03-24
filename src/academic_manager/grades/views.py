from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .serializers import GradesSerializer, CreateGradesSerializer
from .models import Grades
from rest_framework.views import APIView
from rest_framework.response import Response

# View All Submissions (GET)
class GradesView(generics.ListAPIView):
    queryset = Grades.objects.all()
    serializer_class = GradesSerializer

# Create Submission (POST) 
class CreateGradesView(APIView):
    serializer_class = CreateGradesSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            comments = serializer.validated_data.get('comments')
            grades = serializer.validated_data.get('grades')
            grades = Grades(comments=comments, grades=grades)
            grades.save()
            return Response(GradesSerializer(grades).data, status=status.HTTP_201_CREATED)

        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Update Submission (MODIFY) 
class UpdateGradesView(APIView):
    serializer_class = CreateGradesSerializer

    def put(self, request, pk, format=None):
        submission = get_object_or_404(Grades, pk=pk)
        serializer = self.serializer_class(submission, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(GradesSerializer(submission).data, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Delete Submission (REMOVE) 
class DeleteGradesView(APIView):
    def delete(self, request, pk, format=None):
        submission = get_object_or_404(Grades, pk=pk)
        submission.delete()
        return Response({'message': 'Submission deleted successfully'}, status=status.HTTP_204_NO_CONTENT)