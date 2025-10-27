from django.urls import path
from django.http import JsonResponse
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JadwalViewSet

router = DefaultRouter()
router.register(r'jadwal', JadwalViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

def test_api(request):
    return JsonResponse({"message": "API core jalan!"})

urlpatterns = [
    path("siswa/", test_api),  # http://localhost:8000/api/siswa/
]
