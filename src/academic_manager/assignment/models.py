from django.db import models
<<<<<<< Updated upstream
=======
from submission.models import *
>>>>>>> Stashed changes

# Create your models here.
class Assignment(models.Model):
    # Store the variables for this class
    title = models.CharField(max_length=255) # Name of Assignment
    description = models.TextField() # Description of Assignment
    due_date = models.DateTimeField() # Store the due date
<<<<<<< Updated upstream
=======
    submissions = models.ManyToManyField(Submission) # Store the submissions, delete submissions once model is deleted
>>>>>>> Stashed changes

    def __str__(self):
        return self.name