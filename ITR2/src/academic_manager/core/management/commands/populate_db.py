from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from courses.models import *
from students.models import *
from teachers.models import *
import random
import datetime



class Command(BaseCommand):
    help = 'Populates the SQLlite database with mock data'

    def handle(self, *args, **kwargs):
        # Reset db
        User.objects.all().delete()
        Student.objects.all().delete()
        Teacher.objects.all().delete()
        Course.objects.all().delete()

        first_names = ["John", "Mary", "James", "Sarah", "Robert", "Emily", "Michael", "Jessica", "William", "Jennifer"]
        last_names = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Wilson", "Anderson", "Thomas"]
        subjects = ["Math", "Science", "History", "English", "Physics", "Chemistry", "Biology", "Geography", "Art", "Music"]

        for i in range(0, 10):
            user = User.objects.create(username=f"Student {i}", first_name=first_names[random.randint(0, 9)], last_name=last_names[random.randint(0, 9)])
            student = Student.objects.create(user=user)

            user = User.objects.create(username=f"Teacher {i}", first_name=first_names[random.randint(0, 9)], last_name=last_names[random.randint(0, 9)])
            teacher = Teacher.objects.create(user=user)
            
            course = Course.objects.create(title=subjects[i])
            course.teachers.add(teacher)
            course.students.add(student)

        print("Successfully populated database")