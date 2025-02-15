from django.db import models
from students.models import *
from teachers.models import *

# Create your models here.
class Course(models.Model):
    title = models.TextField()
    students = models.ManyToManyField(Student, related_name="courses")
    teachers = models.ManyToManyField(Teacher, related_name="courses")

    def __str__(self):
        return self.title