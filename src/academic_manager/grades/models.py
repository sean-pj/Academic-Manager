from django.db import models
from submissions.models import Submissions
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Grades(models.Model):
    # Store the variables for this class
    comments = models.TextField() # Comments
    mark = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0), MaxValueValidator(100)]) # Mark (ex. ###.##)
    submission = models.OneToOneField(Submissions, on_delete=models.CASCADE)

    # Forcibily changes the name in the admin site to Grades instead of "ss"
    class Meta:
        verbose_name_plural = "Grades"  

    def __str__(self):
        return f"Grade of [{self.submission.student.user.username} - {self.submission.assignment.title} - {self.submission.file.name}]"