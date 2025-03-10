"""
URL configuration for academic_manager project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

#Rest
from rest_framework.routers import DefaultRouter
from students.views import StudentViewSet
from courses.views import CourseViewSet
from teachers.views import TeacherViewSet

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'courses', CourseViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("core.urls")),
    path('teachers/', include("teachers.urls")),
    path('students/', include("students.urls")),
    path('courses/', include("courses.urls")),
<<<<<<< Updated upstream
    path("classroom/", include("classroom.urls")),
    path("assignment/", include("assignment.urls")),
=======
    path('classroom/', include("classroom.urls")),
    path('assignment/', include("assignment.urls")),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
>>>>>>> Stashed changes
    path('api/', include(router.urls))
]
