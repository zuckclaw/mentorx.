from rest_framework import viewsets, permissions
from .models import User, Siswa, Guru, Jadwal, Tugas, TugasSiswa, Dokumentasi, ProgressPKL
from .serializers import *
from django.http import HttpResponse

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class SiswaViewSet(viewsets.ModelViewSet):
    queryset = Siswa.objects.all()
    serializer_class = SiswaSerializer
    permission_classes = [permissions.AllowAny]

class GuruViewSet(viewsets.ModelViewSet):
    queryset = Guru.objects.all()
    serializer_class = GuruSerializer
    permission_classes = [permissions.AllowAny]

class JadwalViewSet(viewsets.ModelViewSet):
    queryset = Jadwal.objects.all()
    serializer_class = JadwalSerializer
    permission_classes = [permissions.AllowAny]

class TugasViewSet(viewsets.ModelViewSet):
    queryset = Tugas.objects.all()
    serializer_class = TugasSerializer
    permission_classes = [permissions.AllowAny]

class TugasSiswaViewSet(viewsets.ModelViewSet):
    queryset = TugasSiswa.objects.all()
    serializer_class = TugasSiswaSerializer
    permission_classes = [permissions.AllowAny]

class DokumentasiViewSet(viewsets.ModelViewSet):
    queryset = Dokumentasi.objects.all()
    serializer_class = DokumentasiSerializer
    permission_classes = [permissions.AllowAny]

class ProgressViewSet(viewsets.ModelViewSet):
    queryset = ProgressPKL.objects.all()
    serializer_class = ProgressSerializer
    permission_classes = [permissions.AllowAny]

class KelasViewSet(viewsets.ModelViewSet):
    queryset = Kelas.objects.all()
    serializer_class = KelasSerializer
    permission_classes = [permissions.AllowAny]

class JurusanViewSet(viewsets.ModelViewSet):
    queryset = Jurusan.objects.all()
    serializer_class = JurusanSerializer
    permission_classes = [permissions.AllowAny]

def home(request):
    return HttpResponse("<h1>Selamat datang di Sistem Informasi UKK/PKL Online</h1>")
