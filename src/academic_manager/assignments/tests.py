from datetime import datetime
from django.test import TestCase
from classroom.models import Classrooms
from assignments.models import Assignments
from courses.models import  Course
from teachers.models import Teacher
from students.models import Student
from django.contrib.auth.models import User

class AssignmentsModelTest(TestCase):
    
    def setUp(self):
        # Create a user instance for Student & Teacher
        teacher = User.objects.create_user(username="mr_look", password="password123")
        student = User.objects.create_user(username="amid", password="password123")
        expected_date_teacher = datetime.strptime("1975-02-17", "%Y-%m-%d").date()
        expected_date_student = datetime.strptime("2002-01-15", "%Y-%m-%d").date()
        expected_date_assig = datetime.strptime("2010-01-11", "%Y-%m-%d").date()

        # Set up the necessary data for the test
        self.course = Course.objects.create(title="PHYS")
        self.teacher = Teacher.objects.create(user=teacher, date_of_birth=expected_date_teacher)
        self.classroom = Classrooms.objects.create(sectionName="A", course=self.course, teacher=self.teacher, schedule="MF 8:00-9:00")
        self.student = Student.objects.create(user=student, date_of_birth=expected_date_student)
        self.classroom.students.add(self.student)

        #Set up the assignments
        self.assignment = Assignments.objects.create(title="Homework_1", description="Out of 10", due_date=expected_date_assig, classroom=self.classroom, weight="10.0")

    def test_section_name(self):
        # Check that the section name = "A"
        self.assertEqual(self.assignment.classroom.sectionName, "A")
        
    def test_student_user(self):
        # Check that the student's username = amid
        student = self.assignment.classroom.students.filter(user__username="amid").first()
        self.assertIsNotNone(student)  #Does "amid" exists
        if student: #if so
            self.assertEqual(student.user.username, "amid")

        
    def test_student_date_birth(self):
        # Check that the student's date of birth = 2002-01-15
        expected_date = datetime.strptime("2002-01-15", "%Y-%m-%d").date()
        student = self.assignment.classroom.students.filter(date_of_birth=expected_date).first()
        self.assertIsNotNone(student)  #Does date of birth = 2002-01-15
        if student: #if so
            self.assertEqual(student.date_of_birth, expected_date)
        
    def test_student_in_classroom(self):
        # Check that the student is associated with the classroom
        self.assertIn(self.student, self.assignment.classroom.students.all())

    def test_classroom_teacher(self):
        # Check that the classroom has the correct teacher
        self.assertEqual(self.assignment.classroom.teacher.user.username, "mr_look")
    
    def test_teacher_date_birth(self):
        # Check that the teacher's date of birth = 1975-02-17
        expected_date = datetime.strptime("1975-02-17", "%Y-%m-%d").date()
        self.assertEqual(self.assignment.classroom.teacher.date_of_birth, expected_date)

    def test_classroom_course(self):
        # Check that the classroom is associated = PHYS
        self.assertEqual(self.assignment.classroom.course.title, "PHYS")

    def test_classroom_schedule(self):
        # Check that the classroom has the correct schedule = MF 8:00-9:00
        self.assertEqual(self.assignment.classroom.schedule, "MF 8:00-9:00")

    def test_assignment_title(self):
        # Check that the assignment title = "Homework_1"
        self.assertEqual(self.assignment.title, "Homework_1")
        
    def test_assignment_description(self):
        # Check that the assignment description = amid
        self.assertEqual(self.assignment.description, "Out of 10")
        
    def test_assignment_due_date(self):
        # Check that the assignment due_date = 2010-01-11
        expected_date_assig = datetime.strptime("2010-01-11", "%Y-%m-%d").date()
        self.assertEqual(self.assignment.due_date, expected_date_assig)

    def test_assignment_weight(self):
        # Check that the assignment has the correct weight
        self.assertEqual(self.assignment.weight, "10.0")

