from rest_framework import serializers
from .models import User, Guru
from django.core.exceptions import ObjectDoesNotExist
# Kita hanya butuh User dan Guru untuk login

class GuruLoginSerializer(serializers.Serializer):
    # Kredensial Input (Hanya untuk ditulis)
    username = serializers.CharField(write_only=True)
    nip = serializers.CharField(write_only=True)
    
    # Field Output (Akan muncul di respons sukses)
    token = serializers.CharField(read_only=True)
    nama = serializers.CharField(read_only=True)
    user_id = serializers.IntegerField(read_only=True) 
    
    # Field non-output, digunakan hanya untuk membawa objek ke View
    user = serializers.SerializerMethodField(read_only=True)

    def validate(self, data):
        username = data.get('username')
        nip = data.get('nip')

        if not username or not nip:
            raise serializers.ValidationError({"non_field_errors": ["Username dan NIP wajib diisi."]})

        try:
            # 1. Cari User berdasarkan username
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise serializers.ValidationError({"non_field_errors": ["Username tidak ditemukan."]})
        
        # 2. Verifikasi Role
        if user.role.lower() != 'guru':
            raise serializers.ValidationError({"non_field_errors": ["Pengguna ini bukan Guru."]})

        # 3. Verifikasi NIP
        try:
            guru = Guru.objects.get(user=user)
        except Guru.DoesNotExist:
            raise serializers.ValidationError({"non_field_errors": ["Relasi Guru tidak ditemukan."]})

        if guru.nip != nip:
            raise serializers.ValidationError({"non_field_errors": ["NIP yang dimasukkan salah!"]})

        # 4. Tambahkan objek user dan nip yang divalidasi ke data untuk digunakan di View
        data['user'] = user
        data['nip'] = nip 
        
        return data

    def get_user(self, obj):
        return None
