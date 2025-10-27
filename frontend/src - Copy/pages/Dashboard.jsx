import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function StatCard({ title, value, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 w-full max-w-sm transition-transform hover:-translate-y-2">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-800 mt-2">{value}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#071233] text-white overflow-hidden">
      {/* Sidebar fix di kiri */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#0b184a] border-r border-white/10 z-40">
        <Sidebar />
      </aside>

      {/* Konten utama */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Konten */}
        <main className="flex-1 px-8 py-12 overflow-y-auto">
          {/* Hero */}
          <section className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight">
              Kelola Jadwal <span className="text-blue-400">UKK / PKL</span>
            </h1>
            <p className="mt-4 text-gray-300 text-xl">
              Panduan untuk mengelola kegiatan PKL dan UKK siswa
            </p>

            {/* Tombol aksi */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold shadow">
                Jadwal Baru
              </button>
              <button className="bg-transparent border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/10">
                Lihat Laporan
              </button>
            </div>
          </div>

          {/* Kartu statistik */}
          <div className="w-full lg:w-96 space-y-4">
            <StatCard title="Siswa Aktif" value="128">
              <div className="text-sm text-gray-500">
                Siswa yang sedang melaksanakan PKL hari ini
              </div>
            </StatCard>
            <StatCard title="Laporan Tertunda" value="6">
              <div className="text-sm text-gray-500">Menunggu review dari guru</div>
            </StatCard>
          </div>
        </section>


          {/* Jadwal Tugas Terbaru */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Jadwal Tugas Terbaru</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative bg-white/5 rounded-2xl p-6 overflow-hidden group hover:bg-white/10 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Tugas #{i} - Laporan Harian PKL
                      </h3>
                      <p className="text-gray-300 mt-1">
                        Deadline: 2025-10-20
                      </p>
                    </div>
                  </div>

                  {/* Slide-in details on hover */}
                  <div className="absolute right-0 top-0 h-full w-0 group-hover:w-44 bg-gradient-to-l from-blue-700 to-transparent transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-sm px-3">
                      <div className="opacity-0 group-hover:opacity-100 transition">
                        <button className="bg-blue-600 px-4 py-2 rounded-lg font-medium">
                          Lihat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
