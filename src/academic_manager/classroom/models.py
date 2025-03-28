from django.db import models
from teachers.models import Teacher
from students.models import Student
from courses.models import Course

# Create your models here.
class Classrooms(models.Model):
    # Store course's section (Letter), course (many-to-one), teacher (many-to-one), students (many-to-many --subject to deletion), schedule
    sectionName = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)  
    students = models.ManyToManyField(Student)
    schedule = models.CharField(max_length=255)

    # Forcibily changes the name in the admin site to Classrooms instead of "ss"
    class Meta:
        verbose_name_plural = "Classrooms"  

    def __str__(self):
        return f"{self.sectionName} - {self.course.name}"
