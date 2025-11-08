import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DokumenPKL() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/dokumen-pkl")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => {
        setData([
          {
            nama: "Fathin",
            judul: "Laporan PKL - PT Telkom Indonesia",
            tanggal: "2025-01-11",
            fileUrl: "http://example.com/laporan1.pdf"
          },
          {
            nama: "Olivia",
            judul: "Laporan PKL - Kominfo",
            tanggal: "2025-01-10",
            fileUrl: "http://example.com/laporan2.docx"
          }
        ]);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#071233] p-8">

      {/* title + back */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Dokumen PKL</h1>
          <p className="text-gray-400 text-sm mt-1">
            List dokumen hasil laporan siswa
          </p>
        </div>

        <Link
          to="/dashboard"
          className="px-5 py-2 bg-gradient-to-r from-[#0C1C46] to-[#083175] hover:opacity-90 text-white rounded-xl shadow-lg transition"
        >
          ← Kembali
        </Link>
      </div>

      {/* body container */}
      <div className="backdrop-blur-xl bg-white/10 px-8 py-6 rounded-2xl shadow-2xl border border-white/20">

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0C1C46]/40 border-b border-white/20">
                <th className="p-4 text-left font-semibold text-white">Nama Siswa</th>
                <th className="p-4 text-left font-semibold text-white">Judul Laporan</th>
                <th className="p-4 text-left font-semibold text-white">Tanggal Upload</th>
                <th className="p-4 text-left font-semibold text-white">File</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-gray-300 italic">
                    Belum ada data dokumen
                  </td>
                </tr>
              ) : (
                data.map((d, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 hover:bg-white/10 transition"
                  >
                    <td className="p-4 text-white">{d.nama}</td>
                    <td className="p-4 text-gray-200">{d.judul}</td>
                    <td className="p-4 text-gray-300">{d.tanggal}</td>
                    <td className="p-4">
                      <a
                        href={d.fileUrl}
                        target="_blank"
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition"
                      >
                        Lihat File
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
