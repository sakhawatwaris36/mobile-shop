import { useState } from "react";
import { Plus, Search, Trash2, Pencil, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ModrenSidebar from "./ModernSidebar";

export default function Products() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: "1200",
      brand: "Apple",
      image: "",
    },
    {
      id: 2,
      name: "Samsung S22",
      price: "900",
      brand: "Samsung",
      image: "",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    brand: "",
    image: "",
  });

  // 📷 Image Upload
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: URL.createObjectURL(file) });
    }
  };

  // ➕ Save / Update
  const saveProduct = () => {
    if (!form.name || !form.price || !form.image) {
      setError("⚠️ Please fill all fields and upload image");
      return;
    }

    setError("");

    if (editId) {
      setProducts(
        products.map((p) =>
          p.id === editId ? { ...p, ...form } : p
        )
      );
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }

    setForm({ name: "", price: "", brand: "", image: "" });
    setEditId(null);
    setShowModal(false);
  };

  // ❌ Delete
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // ✏️ Edit
  const editProduct = (p) => {
    setForm(p);
    setEditId(p.id);
    setShowModal(true);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ModrenSidebar />

      {/* MAIN */}
      <div className="ml-64 p-8 min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617] text-white">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">📱 Products</h1>
            <p className="text-gray-400 text-sm">Manage your mobile store</p>
          </div>

          <button
            onClick={() => {
              setShowModal(true);
              setEditId(null);
              setForm({ name: "", price: "", brand: "", image: "" });
              setError("");
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-xl hover:scale-105 transition shadow-lg"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>

        {/* SEARCH */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center mb-8">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search product..."
            className="bg-transparent outline-none ml-3 w-full text-white placeholder-gray-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl hover:scale-105 transition"
            >

              {/* IMAGE */}
              <div className="h-28 w-28 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {p.image ? (
                  <img src={p.image} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl">📱</span>
                )}
              </div>

              {/* INFO */}
              <h2 className="text-lg font-semibold text-center">{p.name}</h2>
              <p className="text-sm text-gray-300 text-center">{p.brand}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-400 font-bold">${p.price}</span>

                <div className="flex gap-2">

                  <button
                    onClick={() => editProduct(p)}
                    className="bg-yellow-500/20 p-2 rounded-lg hover:bg-yellow-500"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500/20 p-2 rounded-lg hover:bg-red-500"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* 🌫️ MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.25 }}
              className="w-[92%] md:w-[500px] bg-[#0b1220] border border-white/10 rounded-2xl p-6"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl text-white font-bold">
                  {editId ? "✏️ Edit Product" : "➕ Add Product"}
                </h2>

                <button onClick={() => setShowModal(false)}>
                  <X className="text-white"/>
                </button>
              </div>

              {/* FORM */}
              <div className="grid gap-4">

                <input
                  placeholder="Product Name"
                  className="p-3 rounded-xl bg-white/10 text-white outline-none"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Price"
                  className="p-3 rounded-xl bg-white/10 text-white outline-none"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                />

                <input
                  placeholder="Brand"
                  className="p-3 rounded-xl bg-white/10 text-white outline-none"
                  value={form.brand}
                  onChange={(e) =>
                    setForm({ ...form, brand: e.target.value })
                  }
                />

                {/* IMAGE */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="text-white"
                />

                {form.image && (
                  <img
                    src={form.image}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                )}

              </div>

              {/* ERROR */}
              {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
              )}

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={saveProduct}
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