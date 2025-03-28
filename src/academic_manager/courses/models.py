from django.db import models
from students.models import Student
from teachers.models import Teacher

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=50)
    students = models.ManyToManyField(Student, related_name="courses", blank=True)
    teachers = models.ManyToManyField(Teacher, related_name="courses", blank=True)

    def __str__(self):
        return self.title
    
