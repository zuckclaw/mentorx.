import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent px-8 py-6 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-700">Hello, Guru</div>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">F</div>
      </div>
    </header>
  );
}
