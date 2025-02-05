from django.db import models
from core.models import *
from teachers.models import *

# Create your models here.
class Student(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name