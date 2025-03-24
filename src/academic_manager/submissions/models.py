from django.db import models
from grades.models import *

# Create your models here.
class Submissions(models.Model):
    # Store the variables for this class
    # - Comments, pdf file, mark (2 decimal place), 
    # - grades (delete if the pointer submission is removed), submittion time (automatically based on current time)
    comments = models.CharField(max_length=255) # Comments
    file = models.FileField(upload_to='submissions/pdf/', blank=False, null=False)
    mark = models.DecimalField(max_digits=5, decimal_places=2) 
    grades = models.ForeignKey(Grades, on_delete=models.CASCADE)
    submitted_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Submission Name: {self.file.name}"