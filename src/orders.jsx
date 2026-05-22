import { useState } from "react";
import { Search, Trash2, Plus } from "lucide-react";
import ModrenSidebar from "./ModernSidebar";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, name: "Ali", product: "iPhone 13", amount: "$1200", status: "Completed" },
    { id: 2, name: "Ahmed", product: "Samsung S22", amount: "$900", status: "Pending" },
    { id: 3, name: "Sara", product: "AirPods", amount: "$150", status: "Cancelled" },
  ]);

  const [search, setSearch] = useState("");

  // 👉 Add form state
  const [form, setForm] = useState({
    name: "",
    product: "",
    amount: "",
  });

  // 🔥 Delete
  const deleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  // 🔥 Status Change
  const changeStatus = (id, newStatus) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status: newStatus } : o
      )
    );
  };

  // 🔥 Add Order
  const addOrder = () => {
    if (!form.name || !form.product || !form.amount) return;

    const newOrder = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    setOrders([...orders, newOrder]);

    setForm({ name: "", product: "", amount: "" });
  };

  // 🔍 Filter
  const filtered = orders.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🎨 Status Color
  const statusColor = (status) => {
    if (status === "Completed") return "text-green-400";
    if (status === "Pending") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <>
      <ModrenSidebar />

      <div className="ml-64 p-6 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">📦 Orders</h1>

        {/* 🔍 Search */}
        <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl flex items-center mb-6">
          <Search />
          <input
            type="text"
            placeholder="Search order..."
            className="bg-transparent outline-none ml-2 w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ➕ Add Order */}
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl mb-6 grid md:grid-cols-4 gap-3">

          <input
            placeholder="Customer"
            className="bg-transparent border border-white/20 p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Product"
            className="bg-transparent border border-white/20 p-2 rounded"
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
          />

          <input
            placeholder="Amount"
            className="bg-transparent border border-white/20 p-2 rounded"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <button
            onClick={addOrder}
            className="bg-blue-500 flex items-center justify-center gap-2 rounded hover:bg-blue-600 transition"
          >
            <Plus size={16} /> Add
          </button>

        </div>

        {/* 📊 Table */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">

          <table className="w-full text-left">
            <thead className="bg-white/5 text-gray-300 text-sm">
              <tr>
                <th className="p-4">Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-sm">

              {filtered.map((o) => (
                <tr key={o.id} className="border-t border-white/10 hover:bg-white/5">

                  <td className="p-4">{o.name}</td>
                  <td>{o.product}</td>
                  <td>{o.amount}</td>

                  {/* 🔥 Status Dropdown */}
                  <td>
                    <select
                      value={o.status}
                      onChange={(e) => changeStatus(o.id, e.target.value)}
                      className={`bg-transparent outline-none ${statusColor(o.status)}`}
                    >
                      <option className="bg-black">Completed</option>
                      <option className="bg-black">Pending</option>
                      <option className="bg-black">Cancelled</option>
                    </select>
                  </td>

                  {/* ❌ Delete */}
                  <td>
                    <button
                      onClick={() => deleteOrder(o.id)}
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
    </>
  );
}