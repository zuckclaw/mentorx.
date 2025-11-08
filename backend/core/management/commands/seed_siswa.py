from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from core.models import Siswa, Kelas, Jurusan

User = get_user_model()

STUDENTS = [
    # NIS, Username, Nama
    ("13088", "050064456", "Abby Dahlan Havizh"),
    ("13089", "050064457", "Aditya Rizki Pratama"),
    ("13090", "050064458", "Agustin Fitriani"),
    ("13091", "050064459", "Ahmad Faqih Ar Rifa'I"),
    ("13092", "050064460", "Andhika Khairul Fahmi"),
    ("13093", "050064461", "Arief Adi Wibowo"),
    ("13094", "050064462", "Ariq Hafidz Albariqi"),
    ("13095", "050064463", "Aurellia Tri Azhara"),
    ("13096", "050064464", "Bella Angeline Revanya"),
    ("13097", "050064465", "Chintia Claudia"),
    ("13098", "050064466", "Eijaz Ramadhan"),
    ("13099", "050064467", "Erzy Ahmad Rabani"),
    ("13100", "050064468", "Fajri Rakha Dhias *"),
    ("13101", "050064469", "Fajriah Salsabilla"),
    ("13102", "050064470", "Fanny Ramadhani"),
    ("13103", "050064471", "Farrel Ghifari"),
    ("13104", "050064472", "Fathin Jamaluddin"),
    ("13105", "050064473", "Gilang Ramadan"),
    ("13106", "050064474", "Gita Nur Amalia"),
    ("13107", "050064475", "Haaniyah Dwi Januarti"),
    ("13108", "050064476", "Hendri"),
    ("13109", "050064477", "Isnan Fazza *"),
    ("13110", "050064478", "Karllo Ganiyyi Irkha Djawas"),
    ("13111", "050064479", "Khairin Naila Robiatul Adawiyah"),
    ("13112", "050064480", "Ladya Shafa Kamila"),
    ("13113", "050064481", "Muhamad Haekal"),
    ("13114", "050064482", "Muhammad Almer Riwanto"),
    ("13115", "050064483", "Muhammad Dzaki Rafif Helmiansyah"),
    ("13116", "050064484", "Muhammad Fadhil Abiprayana"),
    ("13117", "050064485", "Nur Husna Shidqiyah"),
    ("13118", "050064486", "Raisyah Cahya Kirani"),
    ("13119", "050064487", "Raka Julio Same"),
    ("13120", "050064488", "Ratu Dasha Permata"),
    ("13121", "050064489", "Ririn Suhartini"),
    ("13122", "050064490", "Rizki Syahrul Ramadhan"),
    ("13123", "050064491", "Virza Rizky"),
    # ... (data lainnya tetap sama)
]

class Command(BaseCommand):
    help = "Seed siswa ke database. Password = NIS (di-hash)."

    def handle(self, *args, **kwargs):
        kelas_obj, _ = Kelas.objects.get_or_create(nama="XII")
        jurusan_obj, _ = Jurusan.objects.get_or_create(nama="Rekayasa Perangkat Lunak")

        for nis, username, full_name in STUDENTS:
            # Split nama lengkap menjadi first_name dan last_name
            name_parts = full_name.split()
            first_name = name_parts[0] if name_parts else ""
            last_name = " ".join(name_parts[1:]) if len(name_parts) > 1 else ""
            
            # Buat atau update user
            user, created = User.objects.get_or_create(
                username=username,
                defaults={
                    "first_name": first_name,
                    "last_name": last_name,
                    "nis": nis,
                    "role": "siswa",
                    "email": f"{username}@example.com",
                }
            )
            
            # Jika user sudah ada, update field yang diperlukan
            if not created:
                user.first_name = first_name
                user.last_name = last_name
                user.nis = nis
                user.role = "siswa"
                user.email = f"{username}@example.com"
            
            # Set password sama dengan NIS
            user.set_password(nis)
            user.save()

            # Buat atau update data siswa
            siswa, siswa_created = Siswa.objects.get_or_create(
                user=user,
                defaults={
                    "nis": nis,
                    "kelas": kelas_obj,
                    "jurusan": jurusan_obj
                }
            )
            
            # Update jika siswa sudah ada
            if not siswa_created:
                siswa.nis = nis
                siswa.kelas = kelas_obj
                siswa.jurusan = jurusan_obj
                siswa.save()

            if created:
                self.stdout.write(self.style.SUCCESS(f"Created {username} - {full_name}"))
            else:
                self.stdout.write(self.style.WARNING(f"Updated {username} - {full_name}"))

        self.stdout.write(self.style.SUCCESS("✅ Seeding siswa selesai."))