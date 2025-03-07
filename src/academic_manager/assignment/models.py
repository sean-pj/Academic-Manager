from django.db import models

# Create your models here.
class Assignment(models.Model):
    # Store the variables for this class
    title = models.CharField(max_length=255) # Name of Assignment
    description = models.TextField() # Description of Assignment
    due_date = models.DateTimeField() # Store the due date

    def __str__(self):
        return self.name