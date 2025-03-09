from django.shortcuts import render

#REST
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
def index(request):
    return render(request, "core/index.html")

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]
    queryset = User.objects.all()

    def get_permissions(self):
        #Dynamic permissions, allow POST requests, prevent GET requests
        if self.action in ['list', 'retrieve']: # If GET require authentication
            return [permissions.IsAuthenticated()]
        else:
            return [permissions.AllowAny()] 

    def get_queryset(self):
        # Only return users that belong to the currently authenticated user
        return User.objects.filter(id=self.request.user.id)
