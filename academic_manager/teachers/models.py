from django.db import models
from students.models import *
from core.models import *

# Create your models here.
class Teacher(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name