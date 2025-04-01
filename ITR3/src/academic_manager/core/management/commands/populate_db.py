from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from courses.models import *
from students.models import *
from teachers.models import *
from classroom.models import *
from grades.models import *
from submissions.models import *
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
        Classrooms.objects.all().delete()
        Grades.objects.all().delete()
        Submissions.objects.all().delete()

        first_names = ["John", "Mary", "James", "Sarah", "Robert", "Emily", "Michael", "Jessica", "William", "Jennifer"]
        last_names = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Miller", "Davis", "Wilson", "Anderson", "Thomas"]
        subjects = ["Math", "Science", "History", "English", "Physics", "Chemistry", "Biology", "Geography", "Art", "Music"]

        user = User.objects.create_user(username=f"student", password="student", first_name="Example First Name", last_name="Example Last Name")
        example_student = Student.objects.create(user=user)
        user = User.objects.create_user(username=f"teacher", password="teacher", first_name="Example First Name", last_name="Example Last Name")
        example_teacher = Teacher.objects.create(user=user)

        course = Course.objects.create(title="MATH")

        classroom = Classrooms.objects.create(sectionName="A", teacher=example_teacher, schedule="Monday-Friday", course=course)
        classroom.students.add(example_student)

        homework_example = Assignments.objects.create(title="Homework Example", description="Example Description", due_date=datetime.datetime(2025, 4, 5, 23, 59, 0), classroom=classroom)

        submission_example = Submissions.objects.create(assignment=homework_example, student=example_student)

        grade_example = Grades.objects.create(mark=90, submission=submission_example, comments="")

        for i in range(0, 4):
            user = User.objects.create(username=f"Student {i}", first_name=first_names[random.randint(0, 9)], last_name=last_names[random.randint(0, 9)])
            student = Student.objects.create(user=user, date_of_birth="2008-05-20")

            classroom.students.add(student)

        print("Successfully populated database")