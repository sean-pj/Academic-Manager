from django.test import Client, TestCase
from django.urls import reverse
from students.models import Student

# Create your tests here.
class ApiTestCase(TestCase):
    def setUp(self):
        s1 = Student.objects.create(name="Elvis")

    def test_students(self):
        c = Client()

        response = c.get("/api/students/")

        self.assertEqual(response.status_code, 200)

        response_json = response.json()

        expected_json = [{
            "id" : 1,
            "name" : "Elvis"
        }]

        self.assertEqual(response_json, expected_json)
