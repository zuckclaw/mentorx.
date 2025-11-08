// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DaftarSiswa from "./pages/DaftarSiswa"; // ← ini wajib
import DokumenPKL from "./pages/DokumenPKL";
import Tugas from "./pages/Tugas";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftarsiswa" element={<DaftarSiswa />} />
        <Route path="/dokumenpkl" element={<DokumenPKL />} />
        <Route path="/tugas" element={<Tugas />} />
      </Routes>
    </Router>
  );
}






