from django.db import models
from submissions.models import *

# Create your models here.
class Assignments(models.Model):
    # Store the variables for this class
    title = models.CharField(max_length=255) # Name of Assignment
    description = models.TextField() # Description of Assignment
    due_date = models.DateTimeField() # Store the due date
    submissions = models.ManyToManyField(Submissions, related_name="assignments") # Store the submissions, delete submissions once model is deleted

    def __str__(self):
        return self.title
