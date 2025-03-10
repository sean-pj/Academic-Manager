from django.db import models

# Create your models here.
class Grades(models.Model):
    # Store the variables for this class
    comments = models.CharField(max_length=255) # Comments
    # PLACEHOLDER (submissions copy to return)
    mark = models.DecimalField(max_digits=5, decimal_places=2) # Mark (ex. ###.##)

    def __str__(self):
        return self.name