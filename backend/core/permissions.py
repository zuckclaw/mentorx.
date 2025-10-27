# core/permissions.py

from rest_framework import permissions

class IsGuru(permissions.BasePermission):
    """
    Memberikan izin hanya kepada pengguna yang memiliki role 'Guru'.
    """
    def has_permission(self, request, view):
        # Memeriksa apakah user terautentikasi
        if not request.user.is_authenticated:
            return False
            
        # Memeriksa apakah role user adalah 'Guru'
        return request.user.role == 'Guru'

class IsSiswa(permissions.BasePermission):
    """
    Memberikan izin hanya kepada pengguna yang memiliki role 'Siswa'.
    """
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        return request.user.role == 'Siswa'