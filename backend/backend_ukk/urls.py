from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, permissions
from rest_framework.authtoken.views import obtain_auth_token
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from core.views import (
    UserViewSet, JurusanViewSet, KelasViewSet, SiswaViewSet,
    GuruViewSet, JadwalViewSet, TugasViewSet, TugasSiswaViewSet,
    DokumentasiViewSet, ProgressPKLViewSet, GuruLoginAPIView
)

# ---------------------- ROUTER API ----------------------
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'jurusan', JurusanViewSet)
router.register(r'kelas', KelasViewSet)
router.register(r'siswa', SiswaViewSet)
router.register(r'guru', GuruViewSet)
router.register(r'jadwal', JadwalViewSet)
router.register(r'tugas', TugasViewSet)
router.register(r'tugas-siswa', TugasSiswaViewSet)
router.register(r'dokumentasi', DokumentasiViewSet)
router.register(r'progress-pkl', ProgressPKLViewSet)

# ---------------------- SWAGGER CONFIG ----------------------
schema_view = get_schema_view(
    openapi.Info(
        title="MentorX API Documentation",
        default_version='v1',
        description="Dokumentasi lengkap untuk semua endpoint MentorX API, termasuk contoh request dan response.",
        contact=openapi.Contact(email="admin@mentorx.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# ---------------------- URL PATTERNS ----------------------
urlpatterns = [
    path('', include(router.urls)),
    
    path('admin/', admin.site.urls),

    # API utama
    path('api/', include(router.urls)),

    # Autentikasi
    path('api/auth/', include('rest_framework.urls')),
    path('api/login/', obtain_auth_token, name='api_login'),
    path('api/login_guru/', GuruLoginAPIView.as_view(), name='guru_login_custom'),

    # Dokumentasi Swagger & ReDoc
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
