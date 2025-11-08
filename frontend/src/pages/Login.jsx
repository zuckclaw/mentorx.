import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Disesuaikan: Menggunakan endpoint yang benar sesuai konfigurasi Django Anda
const API_LOGIN_URL = "http://localhost:8000/api/login_guru/";

export default function Login() {
  const [username, setUsername] = useState("");
  const [nip, setNip] = useState(""); // Menggunakan NIP
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Persiapkan data yang akan dikirim (sesuai GuruLoginSerializer: username dan nip)
      const credentials = {
        username,
        nip,
      };

      const response = await fetch(API_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const fullData = await response.json();

      if (response.ok) {
        // --- PERBAIKAN LOGIKA PENGAMBILAN TOKEN ---
        // Token JWT dikirim di dalam fullData.data (dari CustomResponseMixin)
        const tokenData = fullData.data;

        if (tokenData && tokenData.access) {
          console.log("Login Guru Sukses! Access Token:", tokenData.access);
          
          // Menyimpan Access Token dan info pengguna ke localStorage
          // Walaupun Anda tidak ingin autentikasi sekarang, kita simpan datanya dulu.
          localStorage.setItem('accessToken', tokenData.access);
          localStorage.setItem('userName', tokenData.nama); 
          localStorage.setItem('userRole', tokenData.role);
          
          // Redirect ke dashboard
          navigate("/dashboard");
        } else {
          setError("Login berhasil, tetapi data token atau pengguna tidak lengkap.");
          console.error("Token data missing in successful response:", fullData);
        }

      } else {
        // Logika Gagal: Menangani pesan error dari backend Django
        let errorMessage = "Username atau NIP salah.";
        
        // Coba ambil pesan error dari properti 'errors' (jika ada)
        if (fullData.errors) {
            const errors = fullData.errors;
            if (errors.non_field_errors) {
                // Pesan dari error validasi NIP/username
                errorMessage = errors.non_field_errors[0];
            } else if (errors.username) {
                errorMessage = "Username: " + errors.username[0];
            } else if (errors.nip) {
                errorMessage = "NIP: " + errors.nip[0];
            } else {
                errorMessage = fullData.message || "Login gagal, silakan coba lagi.";
            }
        } else {
             // Fallback jika respons error tidak memiliki format DRF standar
             errorMessage = fullData.message || "Terjadi kesalahan yang tidak terduga.";
        }
        
        setError(errorMessage);
        console.error("Login Gagal:", fullData);
      }

    } catch (err) {
      console.error("Network Error:", err);
      setError("Gagal terhubung ke server. Pastikan server Django berjalan di port 8000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Tampilan dikembalikan persis seperti versi awal user (Dark Theme)
    <div className="min-h-screen flex items-center justify-center bg-[#0A1448] relative overflow-hidden px-4">
      {/* Background efek (Original) */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-900 to-purple-800 rounded-full blur-3xl opacity-30 -top-40 -left-60" />

      {/* Container utama (Original flex layout) */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between w-full max-w-6xl relative z-10 gap-6 md:gap-16"
      >
        {/* Kiri (Original) */}
        <div className="flex-1 min-w-[250px] text-left">
          {/* Logo dan text MentorX */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-7 h-7 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor"/></svg>
            </div>
            <h1 className="text-3xl font-semibold text-white">
              Mentor<span className="text-blue-500 font-semibold">X</span>
            </h1>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Login into <br /> your account
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Guiding Your PKL Journey
          </p>
        </div>

        {/* Kanan - Form Login (Original Card) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-2xl"
        >
          <h1 className="text-2xl font-bold text-left mb-6 underline decoration-blue-600">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Username (Original Style) */}
            <div>
              <label className="block mb-1 text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name@example.com"
                required
                disabled={loading}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Input NIP (Mengganti label dari Password) */}
            <div>
              <label className="block mb-1 text-gray-700">NIP (Nomor Induk Pegawai)</label>
              <input
                type="password"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                placeholder="Masukkan NIP Anda"
                required
                disabled={loading}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            
            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm mb-4"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button (Original Style dengan penambahan Loading) */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed flex items-center justify-center space-x-2"
                  : "bg-[#0A1448] hover:bg-blue-800"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Logging In...</span>
                </>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center text-sm text-gray-600 mt-3">
              Need{" "}
              <span className="underline text-blue-600 cursor-pointer">
                Help
              </span>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
