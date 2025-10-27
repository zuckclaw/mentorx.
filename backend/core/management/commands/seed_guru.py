from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from core.models import Guru

class Command(BaseCommand):
    help = "Seed 1 data guru"

    def handle(self, *args, **options):
        User = get_user_model()

        nip = "1987654321"
        nama = "Mujahid S"
        jabatan = "Guru Matematika"
        password = ""

        user, created = User.objects.get_or_create(
            username=nip,
            defaults={
                "first_name": nama.split(" ")[0],
                "last_name": " ".join(nama.split(" ")[1:]),
                "role": "guru",
            }
        )

        if created:
            user.set_password(password)
            user.save()

        Guru.objects.get_or_create(
            user=user,
            nip=nip,
            jabatan=jabatan
        )

        self.stdout.write(self.style.SUCCESS("✅ 1 data Guru berhasil dibuat."))
