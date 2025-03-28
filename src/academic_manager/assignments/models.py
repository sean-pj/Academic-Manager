from django.db import models
from submissions.models import *
from classroom.models import Classrooms
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Assignments(models.Model):
    # Store the variables for this class
    title = models.CharField(max_length=255) # Name of Assignment
    description = models.TextField(null=True, blank=True) # Description of Assignment
    due_date = models.DateTimeField(null=True, blank=True) # Store the due date
    classroom = models.ForeignKey(Classrooms, on_delete=models.CASCADE) #Classroom
    weight = models.DecimalField(max_digits=5, decimal_places=2, default=1.0, validators=[MinValueValidator(0), MaxValueValidator(100)])  # Weight of the assignment

    # Forcibily changes the name in the admin site to Assignments instead of "ss"
    class Meta:
        verbose_name_plural = "Assignments"  

    def __str__(self):
        return self.title
