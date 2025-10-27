from django.contrib import admin
from .models import Jurusan, Kelas, Siswa, User

admin.site.register(Jurusan)
admin.site.register(Kelas)
admin.site.register(Siswa)
admin.site.register(User)