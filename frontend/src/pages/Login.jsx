import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    // 🧠 Boongan dulu — langsung arahkan ke dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-[#0A1448]">
      {/* Bagian Kiri */}
      <div className="flex-1 flex flex-col justify-between p-10">
        <div>
          <h1 className="text-white text-2xl font-bold tracking-wide">
            Mentor<span className="text-blue-400">X</span>
          </h1>
        </div>

        <div className="flex flex-col justify-center h-full -mt-20">
          <h2 className="text-white text-5xl font-bold leading-tight">
            Login into <br /> your account
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Guiding Your PKL Journey
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-left mb-6 underline decoration-blue-600">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>

            <div className="flex justify-center mt-4 text-sm text-gray-600 space-x-2">
              <span>Need</span>
              <span className="underline text-blue-500 cursor-pointer">Help</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
