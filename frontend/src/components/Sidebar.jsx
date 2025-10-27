import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to = "#", icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-full transition 
         ${isActive ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-200"}`
      }
    >
      <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
      <span className="whitespace-nowrap font-medium">{label}</span>
    </NavLink>
  );
};

export default function Sidebar() {
  return (
    // group hover controls children; width transitions from 72 (18rem) narrow to 64 when not hovered? 
    // We'll use w-20 -> group-hover:w-64 for nice expand
    <aside className="fixed left-0 top-0 h-screen z-40">
      <div className="group h-full w-20 hover:w-64 bg-gray-100 transition-all duration-300 ease-in-out rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-lg">
        <div className="h-full flex flex-col">
          {/* Logo area */}
          <div className="p-4 flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white">
                {/* simple ring icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="6" stroke="#2563EB" strokeWidth="2"/>
                </svg>
              </div>
              <div className="hidden group-hover:block">
                <h1 className="text-black font-semibold">Mentor<span className="text-blue-500">X</span></h1>
              </div>
            </div>
          </div>

          {/* Search (only visible when expanded) */}
          <div className="px-4 pb-4">
            <div className="hidden group-hover:block">
              <input
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-lg border focus:outline-none"
              />
            </div>
          </div>

          {/* Menu */}
          <nav className="px-3 flex-1">
            <div className="flex flex-col gap-3 mt-2">
              <div className="px-2">
                <NavItem
                  to="/dashboard"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM3 21h8v-6H3v6zM13 11h8V3h-8v8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  }
                  label="Home"
                />
              </div>

              <div className="px-2">
                <NavItem
                  to="/projects"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5"/></svg>
                  }
                  label="Dashboard"
                />
              </div>

              <div className="px-2">
                <NavItem
                  to="/tasks"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  }
                  label="Projects"
                />
              </div>

              <div className="px-2">
                <NavItem
                  to="/tasks"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h8M4 18h16" stroke="currentColor" strokeWidth="1.5"/></svg>
                  }
                  label="Tasks"
                />
              </div>

              <div className="px-2">
                <NavItem
                  to="/reporting"
                  icon={
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5"/></svg>
                  }
                  label="Reporting"
                />
              </div>
            </div>
          </nav>

          {/* Bottom small menu */}
          <div className="px-4 pb-6">
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-200 rounded-md">
                <span className="w-5 h-5">🔔</span>
                <span className="hidden group-hover:block">Notifications</span>
              </button>
              <button className="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-200 rounded-md">
                <span className="w-5 h-5">❓</span>
                <span className="hidden group-hover:block">Support</span>
              </button>
              <button className="flex items-center gap-3 text-gray-700 p-2 hover:bg-gray-200 rounded-md">
                <span className="w-5 h-5">⚙️</span>
                <span className="hidden group-hover:block">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
