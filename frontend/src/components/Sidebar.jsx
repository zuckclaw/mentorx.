// src/components/Sidebar.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition 
         ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-white/10"}`
      }
    >
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0A163F] border-r border-white/10 text-white flex flex-col fixed left-0 top-0 z-50">
      {/* LOGO */}
      <div className="px-6 py-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" stroke="#2563EB" strokeWidth="2" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold">Mentor<span className="text-blue-500">X</span></h1>
      </div>

      {/* MENU */}
      <nav className="px-4 flex-1">
        <div className="flex flex-col gap-2">

          <NavItem
            to="/dashboard"
            label="Dashboard"
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM3 21h8v-6H3v6zM13 11h8V3h-8v8z" stroke="currentColor" strokeWidth="1.2" /></svg>}
          />

          <NavItem
            to="/daftarsiswa"
            label="Daftar Siswa"
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5"/></svg>}
          />

          <NavItem
            to="/dokumenpkl"
            label="Dokumen PKL"
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5"/></svg>}
          />

          <NavItem
            to="/tugas"
            label="Tugas"
            icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h8M4 18h16" stroke="currentColor" strokeWidth="1.5"/></svg>}
          />

        </div>
      </nav>

      {/* BOTTOM BUTTONS */}
      <div className="px-4 py-6 border-t border-white/10">
        <div className="flex flex-col gap-2 text-gray-300">
          <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg">🔔 Notifications</button>
          <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg">❓ Support</button>
          <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg">⚙️ Settings</button>
        </div>
      </div>
    </aside>
  );
}
