// src/pages/Dashboard.jsx

import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function StatCard({ title, value, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 w-full max-w-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="text-2xl font-bold text-gray-900 mt-2">{value}</div>
      <div className="mt-4 text-gray-600">{children}</div>
    </div>
  );
}

export default function Dashboard() {
  const tasks = [
    { id: 1, title: "Laporan Harian PKL", deadline: "2025-10-20" },
    { id: 2, title: "Evaluasi Tengah PKL", deadline: "2025-10-23" },
    { id: 3, title: "Serah Terima Dokumen", deadline: "2025-10-28" },
  ];

  return (
    <div className="min-h-screen bg-[#071233] text-white flex">

      {/* SIDEBAR SELALU TAMPIL */}
      <aside className="block fixed left-0 top-0 h-full z-20">
        <div className="w-64 h-full">
          <Sidebar />
        </div>
      </aside>

      {/* KONTEN UTAMA */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <header className="w-full z-10">
          <Navbar />
        </header>

        <main className="flex-1 px-6 md:px-8 py-10 overflow-y-auto">

          {/* HERO */}
          <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Kelola Jadwal <span className="text-blue-400">UKK / PKL</span>
              </h1>
              <p className="mt-3 text-gray-300 text-lg md:text-xl">
                Panduan untuk mengelola kegiatan PKL dan UKK siswa
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full font-semibold shadow transition"
                >
                  Jadwal Baru
                </button>
                <button
                  type="button"
                  className="bg-transparent border border-white/20 px-5 py-2.5 rounded-full font-medium hover:bg-white/10 transition"
                >
                  Lihat Laporan
                </button>
              </div>
            </div>

            <div className="w-full lg:w-80 space-y-4">
              <StatCard title="Siswa Aktif" value="36">
                Siswa yang sedang melaksanakan PKL hari ini
              </StatCard>
              <StatCard title="Laporan Tertunda" value="6">
                Menunggu review dari guru
              </StatCard>
            </div>
          </section>

          {/* TASKS */}
          {/* <section className="mt-10">
            <h2 className="text-2xl font-bold mb-5">Jadwal Tugas Terbaru</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <article
                  key={task.id}
                  className="relative bg-white/5 rounded-2xl p-6 overflow-hidden group hover:bg-white/10 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-300 mt-1">Deadline: {task.deadline}</p>
                  </div>

                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <button
                      type="button"
                      className="bg-blue-600 px-4 py-2 rounded-lg font-medium"
                    >
                      Lihat
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}
