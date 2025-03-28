from django.db import models
from django.contrib.auth.models import User
from teachers.models import *

# Create your models here.
class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}"
    

def calculate_total_grade(student, classroom):
    from submissions.models import Submissions
    total_weighted_score = 0.0
    total_weight = 0.0

    # Loop through all assignments in the classroom
    for assignment in classroom.assignments.all():
        # Get the student's submission for this assignment
        submission = Submissions.objects.filter(student=student, assignment=assignment).first()
        
        if submission and submission.grade is not None:  # Check if submission exists and has a grade
            # Calculate weighted score for this assignment
            weighted_score = submission.grade * assignment.weight
            total_weighted_score += weighted_score
            total_weight += assignment.weight

    # Calculate total grade as a percentage (if total_weight is not 0)
    if total_weight > 0:
        total_grade = total_weighted_score / total_weight
    else:
        total_grade = 0

    return total_grade
