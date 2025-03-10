from django.db import models
from assignment.models import *
from grades.models import *

# Create your models here.
class Submission(models.Model):
    # Store the variables for this class
    comments = models.CharField(max_length=255) # Comments
    # PLACEHOLDER (submissions copy to return)
    mark = models.DecimalField(max_digits=5, decimal_places=2) # Mark (ex. ###.##)
    grades = models.ForeignKey(Grades, on_delete=models.CASCADE) # Store the grade

    def __str__(self):
        return self.name