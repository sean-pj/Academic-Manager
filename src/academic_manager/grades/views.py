from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "grades/index.html")  # Make sure this template exists
