from django.db import models
from students.models import Student
from teachers.models import Teacher

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title
    
