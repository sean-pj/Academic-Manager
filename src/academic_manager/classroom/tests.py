from datetime import datetime
from django.test import TestCase
from .models import Classrooms, Course, Teacher, Student
from django.contrib.auth.models import User

class ClassroomsModelTest(TestCase):
    
    def setUp(self):
        # Create a user instance for Student & Teacher
        teacher = User.objects.create_user(username="mr_smith", password="password123")
        student = User.objects.create_user(username="john_doe", password="password123")

        expected_date_teacher = datetime.strptime("1985-05-27", "%Y-%m-%d").date()
        expected_date_student = datetime.strptime("2009-05-15", "%Y-%m-%d").date()

        # Set up the necessary data for the test
        self.course = Course.objects.create(title="MATH")
        self.teacher = Teacher.objects.create(user=teacher, date_of_birth=expected_date_teacher)
        self.classroom = Classrooms.objects.create(sectionName="A", course=self.course, teacher=self.teacher, schedule="MWF 9:00-11:00")
        self.student = Student.objects.create(user=student, date_of_birth=expected_date_student)
        self.classroom.students.add(self.student)

    def test_section_name(self):
        # Check that the section name = "A"
        self.assertEqual(self.classroom.sectionName, "A")
        
    def test_student_user(self):
        # Check that the student's username = john_doe
        student = self.classroom.students.filter(user__username="john_doe").first()
        self.assertIsNotNone(student)  #Does "john_doe" exists
        if student: #if so
            self.assertEqual(student.user.username, "john_doe")
        
    def test_student_date_birth(self):
        # Check that the student's date of birth = 2009-05-15
        expected_date = datetime.strptime("2009-05-15", "%Y-%m-%d").date()
        student = self.classroom.students.filter(date_of_birth=expected_date).first()
        self.assertIsNotNone(student)  #Does date of birth = 2009-05-15
        if student: #if so
            self.assertEqual(student.date_of_birth, expected_date)
        
    def test_student_in_classroom(self):
        # Check that the student is associated with the classroom
        self.assertIn(self.student, self.classroom.students.all())

    def test_classroom_teacher(self):
        # Check that the classroom has the correct teacher
        self.assertEqual(self.classroom.teacher.user.username, "mr_smith")
    
    def test_teacher_date_birth(self):
        # Check that the teacher's date of birth = 1985-05-27
        expected_date = datetime.strptime("1985-05-27", "%Y-%m-%d").date()
        self.assertEqual(self.classroom.teacher.date_of_birth, expected_date)

    def test_classroom_course(self):
        # Check that the classroom is associated = MATH
        self.assertEqual(self.classroom.course.title, "MATH")

    def test_classroom_schedule(self):
        # Check that the classroom has the correct schedule = MWF 9:00-11:00
        self.assertEqual(self.classroom.schedule, "MWF 9:00-11:00")

