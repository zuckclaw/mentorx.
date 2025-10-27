from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

# Custom user untuk role guru/siswa/admin
class User(AbstractUser):
    # Tambahkan field tambahan sesuai kebutuhan
    nis = models.CharField(max_length=20, unique=True, null=True, blank=True)
    role = models.CharField(max_length=20, choices=(("guru", "Guru"), ("siswa", "Siswa")), default="siswa")

class Jurusan(models.Model):
    nama = models.CharField(max_length=100)

    def __str__(self):
        return self.nama

class Siswa(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nis = models.CharField(max_length=20, unique=True)
    kelas = models.ForeignKey('Kelas', on_delete=models.SET_NULL, null=True)
    jurusan = models.ForeignKey('Jurusan', on_delete=models.SET_NULL, null=True)
    nama = models.CharField(max_length=100, null=True, blank=True)  # kolom baru

    def __str__(self):
        return self.user.get_full_name()

class Guru(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nip = models.CharField(max_length=20, unique=True)
    jabatan = models.CharField(max_length=50)

    def __str__(self):
        return self.user.get_full_name()

class Jadwal(models.Model):
    tanggal = models.DateField()
    jam = models.TimeField()
    kegiatan = models.CharField(max_length=100)
    keterangan = models.TextField(blank=True)
    guru = models.ForeignKey(Guru, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.kegiatan} - {self.tanggal}"

class Tugas(models.Model):
    judul = models.CharField(max_length=100)
    deskripsi = models.TextField()
    deadline = models.DateField()
    lampiran = models.FileField(upload_to="lampiran_tugas/", blank=True, null=True)
    created_by = models.ForeignKey(Guru, on_delete=models.CASCADE)

    def __str__(self):
        return self.judul

class TugasSiswa(models.Model):
    STATUS_CHOICES = (("belum", "Belum"), ("sudah", "Sudah"))
    siswa = models.ForeignKey(Siswa, on_delete=models.CASCADE)
    tugas = models.ForeignKey(Tugas, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default="belum")
    file_jawaban = models.FileField(upload_to="jawaban_tugas/", blank=True, null=True)
    nilai = models.IntegerField(blank=True, null=True)
    catatan = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.siswa} - {self.tugas}"

class Dokumentasi(models.Model):
    siswa = models.ForeignKey(Siswa, on_delete=models.CASCADE)
    foto = models.ImageField(upload_to="dokumentasi/")
    keterangan = models.TextField()
    tanggal = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Dokumentasi {self.siswa}"

class ProgressPKL(models.Model):
    siswa = models.ForeignKey(Siswa, on_delete=models.CASCADE)
    tugas = models.ForeignKey(Tugas, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    nilai = models.IntegerField(blank=True, null=True)
    pdf_path = models.FileField(upload_to="progress_pdf/", blank=True, null=True)

    def __str__(self):
        return f"{self.siswa} - {self.tugas}"
    
class Kelas(models.Model):
    nama = models.CharField(max_length=100)

    def __str__(self):
        return self.nama
