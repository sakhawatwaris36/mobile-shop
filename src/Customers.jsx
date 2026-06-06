import { useState } from "react";
import { Search, Plus, Trash2, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ModrenSidebar from "./ModernSidebar";

export default function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Ali", email: "ali@gmail.com", phone: "03001234567" },
    { id: 2, name: "Ahmed", email: "ahmed@gmail.com", phone: "03111234567" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // ➕ Save / Update
  const saveCustomer = () => {
    if (!form.name || !form.email) return;

    if (editId) {
      setCustomers(
        customers.map((c) =>
          c.id === editId ? { ...c, ...form } : c
        )
      );
    } else {
      setCustomers([...customers, { ...form, id: Date.now() }]);
    }

    setForm({ name: "", email: "", phone: "" });
    setEditId(null);
    setShowModal(false);
  };

  // ❌ Delete
  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  // ✏️ Edit
  const editCustomer = (c) => {
    setForm({ name: c.name, email: c.email, phone: c.phone });
    setEditId(c.id);
    setShowModal(true);
  };

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ModrenSidebar />

      {/* MAIN */}
      <div className="ml-64 customer p-8 min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617] text-white">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">👤 Customers</h1>
            <p className="text-gray-400 text-sm">
              Manage your customers
            </p>
          </div>

          <button
            onClick={() => {
              setShowModal(true);
              setEditId(null);
              setForm({ name: "", email: "", phone: "" });
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-xl hover:scale-105 transition shadow-lg"
          >
            <Plus size={18} /> Add Customer
          </button>
        </div>

        {/* SEARCH */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center mb-8">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search customer..."
            className="bg-transparent outline-none ml-3 w-full text-white placeholder-gray-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

          <table className="w-full text-left">

            <thead className="bg-white/10 text-gray-300 text-sm">
              <tr>
                <th className="p-5">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-5">{c.name}</td>
                  <td className="text-gray-300">{c.email}</td>
                  <td className="text-gray-300">{c.phone}</td>

                  <td className="flex justify-center gap-3 p-4">

                    <button
                      onClick={() => editCustomer(c)}
                      className="bg-yellow-500/20 p-2 rounded-lg hover:bg-yellow-500 transition"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => deleteCustomer(c.id)}
                      className="bg-red-500/20 p-2 rounded-lg hover:bg-red-500 transition"
                    >
                      <Trash2 size={16} />
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* 🌫️ MODAL WITH ANIMATION */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.25 }}
              className="w-[92%] md:w-[500px] bg-[#0b1220] border border-white/10 rounded-2xl shadow-2xl p-6"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {editId ? "✏️ Edit Customer" : "➕ Add Customer"}
                  </h2>
                  <p className="text-gray-400 text-xs">
                    Fill details carefully
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* FORM */}
              <div className="grid gap-4">

                <input
                  placeholder="Full Name"
                  className="p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-blue-500"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Email"
                  className="p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-purple-500"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <input
                  placeholder="Phone"
                  className="p-3 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-green-500"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={saveCustomer}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  {editId ? "Update" : "Save"}
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-white/10 py-3 text-white rounded-xl hover:bg-white/20 transition"
                >
                  Cancel
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}