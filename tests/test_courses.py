from django.test import TestCase
from .models import Course
from students.models import Student
from teachers.models import Teacher

# Create your tests here.
class CourseTestCase(TestCase):
    def setUp(self):
        c1 = Course.objects.create(title="Math")
        c2 = Course.objects.create(title="English")
        t1 = Teacher.objects.create(name="Timothee")
        s1 = Student.objects.create(name="Nathan")
        c1.teachers.add(t1)
        c1.students.add(s1)

    def test_title(self):
        c1 = Course.objects.get(title="Math")
        c2 = Course.objects.get(title="English")
        self.assertEqual("Math", c1.title)
        self.assertEqual("English", c2.title)

    def test_teachers(self):
        c1 = Course.objects.get(title="Math")
        t1 = Teacher.objects.get(name="Timothee")
        self.assertEqual(c1.teachers.first(), t1)
    
    def test_students(self):
        c1 = Course.objects.get(title="Math")
        s1 = Student.objects.get(name="Nathan")
        self.assertEqual(c1.students.first(), s1)
    
    def test_count(self):
        c1 = Course.objects.get(title="Math")
        s1 = Student.objects.create(name="TJ")
        c1.students.add(s1)
        self.assertEqual(c1.students.count(), 2)