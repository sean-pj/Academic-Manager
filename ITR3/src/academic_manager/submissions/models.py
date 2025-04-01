from django.db import models
from django.contrib.auth.models import User
from grades.models import *
from students.models import *
from assignments.models import Assignments

# Create your models here.
class Submissions(models.Model):
    # Store the variables for this class
    # - Comments, pdf file, mark (2 decimal place), 
    # - grades (delete if the pointer submission is removed), submittion time (automatically based on current time)
    comments = models.CharField(max_length=255, blank=True) 
    file = models.FileField(upload_to='submissions/pdf/', blank=False, null=False)
    assignment = models.ForeignKey(Assignments, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, related_name='submissions', on_delete=models.CASCADE)
    submitted_time = models.DateTimeField(auto_now_add=True)

    # Forcibily changes the name in the admin site to Submissions instead of "ss"
    class Meta:
        verbose_name_plural = "Submissions" 

    def __str__(self):
        return f"Submission:{self.student.user.username} - {self.assignment.title} - {self.file.name}"
    