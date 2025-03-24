from django.db import models
from teachers.models import *
from students.models import *
from assignments.models import *

# Create your models here.
class Classrooms(models.Model):
    # Store the name of the course's section (Letter)
    sectionName = models.CharField(max_length=255)

    # One teacher per classroom, once teacher is removed (students associated with that classroom lose their reference to that classroom)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)  
    students = models.ManyToManyField(Student)  # Multiple students per classroom (ManyToManyField)
    assignments = models.ManyToManyField(Assignments)  # Multiple assignments per classroom (ManyToManyField)
    schedule = models.CharField(max_length=255) # Stores the schedule (ex. weekdays 11-12) - subject to change

    def __str__(self):
        return self.sectionName
