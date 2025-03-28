from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .serializers import SubmissionSerializer, CreateSubmissionSerializer
from .models import Submissions
from rest_framework.views import APIView
from rest_framework.response import Response

# View All Submissions (GET)
class SubmissionView(generics.ListAPIView):
    queryset = Submissions.objects.all()
    serializer_class = SubmissionSerializer

# Create Submission (POST) 
class CreateSubmissionView(APIView):
    serializer_class = CreateSubmissionSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            comments = serializer.validated_data.get('comments')
            file = serializer.validated_data.get('file')
            assignment = serializer.validated_data.get('assignment')
            student = serializer.validated_data.get('student')
            submission = Submissions(comments=comments, file=file, assignment=assignment, student=student)
            submission.save()
            return Response(SubmissionSerializer(submission).data, status=status.HTTP_201_CREATED)

        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Update Submission (MODIFY) 
class UpdateSubmissionView(APIView):
    serializer_class = CreateSubmissionSerializer

    def put(self, request, pk, format=None):
        submission = get_object_or_404(Submissions, pk=pk)
        serializer = self.serializer_class(submission, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(SubmissionSerializer(submission).data, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

# Delete Submission (REMOVE) 
class DeleteSubmissionView(APIView):
    def delete(self, request, pk, format=None):
        submission = get_object_or_404(Submissions, pk=pk)
        submission.delete()
        return Response({'message': 'Submission deleted successfully'}, status=status.HTTP_204_NO_CONTENT)