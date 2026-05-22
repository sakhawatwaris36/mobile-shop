import {
  Home,
  ShoppingCart,
  MessageCircle,
  Users,
  Settings,
  Smartphone
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function ModrenSidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition duration-300 ${
      isActive
        ? "bg-[#1e293b] text-blue-400 shadow-inner"
        : "hover:text-blue-400 hover:translate-x-1"
    }`;

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white flex flex-col p-5 fixed shadow-2xl">

      {/* 🔥 Logo Section */}
      <div className="flex items-center gap-3 mb-10">

        <div className="bg-gradient-to-tr from-blue-500 to-purple-500 p-3 rounded-2xl shadow-xl animate-pulse">
          <Smartphone size={26} className="text-white" />
        </div>

        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Malik Mobile
          </h1>
          <span className="text-xs text-gray-400">Premium Store</span>
        </div>

      </div>

      {/* 🔥 Badge */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-sm px-3 py-1 rounded-full w-fit mb-6 shadow-md animate-pulse">
        🔥 Hot Deals
      </div>

      {/* 📌 Menu */}
      <nav className="flex flex-col gap-4 text-sm">

        <NavLink to="/Dashboard" className={linkStyle}>
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="/Orders" className={linkStyle}>
          <ShoppingCart size={20} /> Orders
        </NavLink>

        <NavLink to="/Customers" className={linkStyle}>
          <Users size={20} /> Customers
        </NavLink>

        <NavLink to="/Messages" className={linkStyle}>
          <MessageCircle size={20} /> Messages
        </NavLink>

        {/* 📦 Product Card */}
        <div className="bg-[#1e293b] p-3 rounded-xl shadow-inner mt-2 hover:scale-105 transition duration-300">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart size={18} className="text-blue-400" />
            <h2 className="font-semibold">Products</h2>
          </div>

          <p className="text-xs text-gray-400">
            📱 iPhones, Samsung, Accessories available
          </p>

          <NavLink to="/Products">
            <button className="mt-2 w-full bg-blue-500 text-sm py-1 rounded-lg hover:bg-blue-600 transition">
              View Items
            </button>
          </NavLink>
        </div>

        <NavLink to="/Settings" className={linkStyle}>
          <Settings size={20} /> Settings
        </NavLink>

      </nav>

      {/* 👤 Profile */}
      <div className="mt-auto flex items-center gap-3 bg-[#1e293b] p-3 rounded-xl">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Sakhawat</p>
          <span className="text-xs text-gray-400">Admin</span>
        </div>
      </div>

    </div>
  );
}