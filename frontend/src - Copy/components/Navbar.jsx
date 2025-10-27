import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-transparent px-8 py-6 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-700">Hello, Guru</div>
        <button
          onClick={() => navigate("/profile")}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition"
        >
          F
        </button>
      </div>
    </header>
  );
}
