import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tugas() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/tugas")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => {
        // dummy data
        setData([
          {
            judul: "Laporan Bab 1",
            deadline: "2025-01-16",
            status: "Belum Dikumpulkan"
          },
          {
            judul: "Laporan Bab 2",
            deadline: "2025-01-20",
            status: "Sudah Dikumpulkan"
          }
        ]);
      });
  }, []);

  const openUpload = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#071233] p-8">
      
      {/* title + back */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Tugas PKL</h1>
          <p className="text-gray-500">Daftar tugas yang harus kamu kumpulkan</p>
        </div>

        <Link
          to="/dashboard"
          className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-lg transition"
        >
          ← Back
        </Link>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-3 text-left font-semibold text-gray-700">Judul</th>
                <th className="p-3 text-left font-semibold text-gray-700">Deadline</th>
                <th className="p-3 text-left font-semibold text-gray-700">Status</th>
                <th className="p-3 text-left font-semibold text-gray-700"></th>
              </tr>
            </thead>

            <tbody>
              {data.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 font-medium">{d.judul}</td>
                  <td className="p-3">{d.deadline}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${d.status === "Sudah Dikumpulkan"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openUpload(d)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                    >
                      Upload Jawaban
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Modal Upload */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-xl p-6 w-[420px] shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Upload jawaban: {selectedTask?.judul}
            </h2>

            <input type="file" className="w-full border p-2 rounded mb-4"/>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
