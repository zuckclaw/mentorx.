// src/pages/DaftarSiswa.jsx

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function DaftarSiswa() {
  const [siswa, setSiswa] = useState([]);
  const [loading, setLoading] = useState(true);

  // ganti ini dengan endpoint kamu
  const API_URL = "http://localhost:5000/api/siswa";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSiswa(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetch:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-[#071233] text-white">
      <Sidebar />

      <div className="flex-1 ml-64 px-8 py-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">Daftar Siswa</h1>

        {loading ? (
          <p className="text-gray-300">Loading data..</p>
        ) : (
          <table className="w-full bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">NIS</th>
                <th className="px-4 py-3 text-left">Kelas</th>
                <th className="px-4 py-3 text-left">Jurusan</th>
              </tr>
            </thead>
            <tbody>
              {siswa.map((s) => (
                <tr key={s.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-4 py-3">{s.nama}</td>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3">{s.nis}</td>
                  <td className="px-4 py-3">{s.kelas}</td>
                  <td className="px-4 py-3">{s.jurusan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
