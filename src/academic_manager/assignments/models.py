from django.db import models
from submissions.models import *

# Create your models here.
class Assignments(models.Model):
    # Store the variables for this class
    title = models.CharField(max_length=255) # Name of Assignment
    description = models.TextField(null=True, blank=True) # Description of Assignment
    due_date = models.DateTimeField(null=True, blank=True) # Store the due date
    submissions = models.ManyToManyField(Submissions, related_name="assignments", blank=True) # Store the submissions, delete submissions once model is deleted

    def __str__(self):
        return self.title
