from rest_framework import serializers
from .models import User, Siswa, Guru, Jadwal, Tugas, TugasSiswa, Dokumentasi, ProgressPKL, Kelas, Jurusan
from core import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'role']

class SiswaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Siswa
        fields = '__all__'

class GuruSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guru
        fields = '__all__'

class JadwalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jadwal
        fields = '__all__'

class TugasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tugas
        fields = '__all__'

class TugasSiswaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TugasSiswa
        fields = '__all__'

class DokumentasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dokumentasi
        fields = '__all__'

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressPKL
        fields = '__all__'

class KelasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kelas
        fields = '__all__'

class JurusanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jurusan
        fields = '__all__'