import { useEffect, useState } from "react";
import ModrenSidebar from "./ModernSidebar";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Sakhawat",
    email: "sakhawat@gmail.com",
    password: "",
    darkMode: true,
    notifications: true,
  });

  const [msg, setMsg] = useState("");

  // 📦 Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // 🌙 FIXED DARK MODE (NO DESIGN CHANGE)
  useEffect(() => {
    const root = document.documentElement;

    if (form.darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [form.darkMode]);

  // 💾 SAVE
  const handleSave = () => {
    localStorage.setItem("settings", JSON.stringify(form));

    setMsg("Settings saved successfully ✅");

    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <>
      <ModrenSidebar />

      {/* 🔴 SAME OLD DESIGN (ONLY FIXED COLORS SUPPORT) */}
      <div className="ml-64 setting p-6 min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl mb-6 border border-white/20">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="p-3 rounded-lg bg-white/10 outline-none text-white"
              placeholder="Name"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="p-3 rounded-lg bg-white/10 outline-none text-white"
              placeholder="Email"
            />

          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl mb-6 border border-white/20">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>

          <input
            type="password"
            placeholder="New Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-white/10 outline-none text-white"
          />
        </div>

        {/* Toggles */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl mb-6 border border-white/20">

          <h2 className="text-lg font-semibold mb-4">Preferences</h2>

          {/* Dark Mode */}
          <div className="flex justify-between items-center mb-4">
            <span>🌙 Dark Mode</span>
            <input
              type="checkbox"
              checked={form.darkMode}
              onChange={() =>
                setForm({ ...form, darkMode: !form.darkMode })
              }
            />
          </div>

          {/* Notifications */}
          <div className="flex justify-between items-center">
            <span>🔔 Notifications</span>
            <input
              type="checkbox"
              checked={form.notifications}
              onChange={() =>
                setForm({
                  ...form,
                  notifications: !form.notifications,
                })
              }
            />
          </div>

        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Save Settings 💾
        </button>

        {/* MESSAGE (P TAG SAME STYLE) */}
        {msg && (
          <p className="mt-3 text-red-400">
            {msg}
          </p>
        )}

      </div>
    </>
  );
}