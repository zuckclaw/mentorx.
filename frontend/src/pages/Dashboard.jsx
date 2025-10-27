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
    <div className="min-h-screen bg-[#071233] text-white">
      <Sidebar />
      <div className="pl-20 md:pl-80"> {/* space to allow sidebar width when expanded */}
        <Navbar />
        <main className="px-12 py-12">
          {/* Hero */}
          <section className="flex items-start gap-10">
            <div className="flex-1">
              <h1 className="text-5xl font-bold leading-tight">
                Manage your <span className="text-blue-400">attendance</span> <br /> Faster
              </h1>
              <p className="mt-4 text-gray-300 text-xl">Guiding Your PKL Journey</p>

              {/* action buttons */}
              <div className="mt-8 flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold shadow">
                  New Schedule
                </button>
                <button className="bg-transparent border border-white/20 px-6 py-3 rounded-full font-medium">
                  View Reports
                </button>
              </div>
            </div>

            {/* Right column: quick stats/cards */}
            <div className="w-96 space-y-4">
              <StatCard title="Active Students" value="128">
                <div className="text-sm text-gray-500">Siswa sedang PKL hari ini</div>
              </StatCard>
              <StatCard title="Pending Reports" value="6">
                <div className="text-sm text-gray-500">Butuh review guru</div>
              </StatCard>
            </div>
          </section>

          {/* Interactive area: list of tasks with hover reveal */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recent Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div
                  key={i}
                  className="relative bg-white/5 rounded-2xl p-6 overflow-hidden group hover:bg-white/10 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Task #{i} - Visit Company</h3>
                      <p className="text-gray-300 mt-1">Deadline: 2025-10-20</p>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-blue-600 px-4 py-2 rounded-lg font-medium">Open</button>
                    </div>
                  </div>

                  {/* slide-in details on hover */}
                  <div className="absolute right-0 top-0 h-full w-0 group-hover:w-44 bg-gradient-to-l from-blue-700 to-transparent transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-sm px-3">
                      <div className="font-semibold">Preview</div>
                      <div className="text-gray-200 text-xs mt-2">Click Open to review</div>
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
