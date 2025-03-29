from django.shortcuts import render

#REST
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

# Create your views here.
def index(request):
    return render(request, "core/index.html")

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = User.objects.all()

    def get_queryset(self):
        # Only return the active users object
        return User.objects.filter(id=self.request.user.id)