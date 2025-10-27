import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1448] relative overflow-hidden px-4">
      {/* Background efek */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-900 to-purple-800 rounded-full blur-3xl opacity-30 -top-40 -left-60" />

      {/* Container utama */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between w-full max-w-6xl relative z-10 gap-6 md:gap-16"
      >
        {/* Kiri */}
        <div className="flex-1 min-w-[250px] text-left">
          {/* Logo dan text MentorX */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-7 h-7 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
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

        {/* Kanan */}
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
            <div>
              <label className="block mb-1 text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A1448] text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Login
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
