from django.core.management.base import BaseCommand
from core.models import User

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
        for nama, email in EMAILS.items():
            try:
                user = User.objects.get(nama=nama, role="siswa")
                user.email = email
                user.save()
                self.stdout.write(self.style.SUCCESS(f"Updated {nama} -> {email}"))
            except User.DoesNotExist:
                self.stdout.write(self.style.ERROR(f"❌ User {nama} not found"))

        self.stdout.write(self.style.SUCCESS("✅ Update email selesai."))
