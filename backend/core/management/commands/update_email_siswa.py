from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from core.models import User

User = get_user_model()

EMAILS = {
    "Abby Dahlan Havizh": "abby11dahlan@gmail.com",
    "Aditya Rizki Pratama": "adityarizkipratama30@gmail.com",
    "Agustin Fitriani": "agustinftr21@gmail.com",
    "Ahmad Faqih Ar Rifa'I": "ahmadfagih.arrifai@gmail.com",
    "Andhika Khairul Fahmi": "andhikafahmi41@gmail.com",
    "Arief Adi Wibowo": "ariefadiwibowo42@gmail.com",
    "Ariq Hafidz Albariqi": "ariqhafidz25@gmail.com",
    "Aurellia Tri Azhara": "triazharaaurellia@gmail.com",
    "Bella Angeline Revanya": "bella11hiiiii@gmail.com",
    "Chintia Claudia": "cyntiaclaudia85@gmail.com",
    "Eijaz Ramadhan": "wirma7449@gmail.com",
    "Erzy Ahmad Rabani": "sachaabilla2008@gmail.com",
    "Fanny Ramadhani": "fanny.rmdnii12@gmail.com",
    "Farrel Ghifari": "farrelghifari433@gmail.com",
    "Fathin Jamaluddin": "fathinjamaluddin666@gmail.com",
    "Karllo Ganiyyi Irkha Djawas": "karllolilo763@gmail.com",
    "Gita Nur Amalia": "nuramaliagita24@gmail.com",
    "Haaniyah Dwi Januarti": "djha4ni1yah113@gmail.com",
    "Hendri": "hendri23072009@gmail.com",
    "Isnan Fazza *": "fazzaisnan@gmail.com",
    "Khairin Naila Robiatul Adawiyah": "khairinnaila08@gmail.com",
    "Muhamad Haekal": "muhamadhaekal618@gmail.com",
    "Muhammad Almer Riwanto": "muhammadalmer2304@gmail.com",
    "Muhammad Dzaki Rafif Helmiansyah": "mdzakirafifh96999@gmail.com",
    "Muhammad Fadhil Abiprayana": "nabixka05@gmail.com",
    "Nur Husna Shidqiyah": "husnanur068@gmail.com",
    "Raisyah Cahya Kirani": "rcahyakirani@gmail.com",
    "Ratu Dasha Permata": "ratudasha.7@gmail.com",
    "Ririn Suhartini": "ririnsuhartini402@gmail.com",
    "Rizki Syahrul Ramadhan": "sponge27riz@gmail.com",
    "Virza Rizky": "virzarizky151@gmail.com",
}

class Command(BaseCommand):
    help = "Update email siswa sesuai mapping EMAILS"

    def handle(self, *args, **kwargs):
        updated_count = 0
        not_found_count = 0
        
        for full_name, email in EMAILS.items():
            try:
                # Split nama untuk mencari berdasarkan first_name dan last_name
                name_parts = full_name.split()
                first_name = name_parts[0] if name_parts else ""
                last_name = " ".join(name_parts[1:]) if len(name_parts) > 1 else ""
                
                # Cari user berdasarkan kombinasi first_name dan last_name
                if last_name:
                    # Jika ada last_name, cari dengan kombinasi
                    users = User.objects.filter(
                        first_name__iexact=first_name,
                        last_name__icontains=last_name,
                        role="siswa"
                    )
                else:
                    # Jika hanya first_name, cari berdasarkan first_name saja
                    users = User.objects.filter(
                        first_name__iexact=first_name,
                        role="siswa"
                    )
                
                if users.exists():
                    # Ambil user pertama yang match
                    user = users.first()
                    old_email = user.email
                    user.email = email
                    user.save()
                    self.stdout.write(
                        self.style.SUCCESS(f"✅ Updated {full_name} ({old_email} -> {email})")
                    )
                    updated_count += 1
                else:
                    # Fallback: cari berdasarkan username pattern atau email lama
                    self.stdout.write(
                        self.style.WARNING(f"⚠️  User {full_name} not found with name search, trying fallback...")
                    )
                    
                    # Fallback 1: Cari berdasarkan pola username
                    fallback_users = User.objects.filter(
                        role="siswa",
                        first_name__icontains=first_name
                    )
                    
                    if fallback_users.exists():
                        user = fallback_users.first()
                        old_email = user.email
                        user.email = email
                        user.save()
                        self.stdout.write(
                            self.style.SUCCESS(f"✅ Updated {user.first_name} {user.last_name} ({old_email} -> {email})")
                        )
                        updated_count += 1
                    else:
                        self.stdout.write(self.style.ERROR(f"❌ User {full_name} not found"))
                        not_found_count += 1
                        
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"❌ Error updating {full_name}: {str(e)}"))

        self.stdout.write(self.style.SUCCESS(
            f"✅ Update email selesai. Berhasil: {updated_count}, Gagal: {not_found_count}"
        ))