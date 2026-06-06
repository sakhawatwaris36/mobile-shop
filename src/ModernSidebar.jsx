import {
  Home,
  ShoppingCart,
  MessageCircle,
  Users,
  Settings,
  Smartphone,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function ModrenSidebar() {

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition duration-300 w-full ${
      isActive
        ? "bg-[#1e293b] text-blue-400"
        : "hover:bg-[#1e293b] hover:text-blue-400"
    }`;

  return (
    <div
      className="
        fixed top-0 left-0 h-screen
        w-[4rem] md:w-64
        bg-gradient-to-b from-[#0f172a] to-[#1e293b]
        text-white flex flex-col p-2 md:p-5
        transition-all duration-300
        overflow-hidden
      "
    >

      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
        <Smartphone size={24} />

        <div className="hidden md:block">
          <h1 className="text-xl font-bold">Malik Mobile</h1>
          <span className="text-xs text-gray-400">Premium Store</span>
        </div>
      </div>

      {/* Badge */}
      <div className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full w-fit mb-6">
        🔥 Hot Deals
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-4 text-sm items-center md:items-start">

        <NavLink to="/Dashboard" className={linkStyle}>
          <Home size={20} />
          <span className="hidden md:inline">Dashboard</span>
        </NavLink>

        <NavLink to="/Orders" className={linkStyle}>
          <ShoppingCart size={20} />
          <span className="hidden md:inline">Orders</span>
        </NavLink>

        <NavLink to="/Customers" className={linkStyle}>
          <Users size={20} />
          <span className="hidden md:inline">Customers</span>
        </NavLink>

        <NavLink to="/Messages" className={linkStyle}>
          <MessageCircle size={20} />
          <span className="hidden md:inline">Messages</span>
        </NavLink>

        {/* ⭐ PRODUCTS STICKER */}
        <NavLink to="/Products" className="w-full">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg hover:scale-105 transition-all duration-300">

            {/* glow circle */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full"></div>

            <div className="relative z-10 flex items-center justify-center md:justify-start gap-3">

              <div className="bg-white/20 p-2 rounded-xl">
                <ShoppingCart size={20} />
              </div>

              <div className="hidden md:block">
                <h2 className="font-bold text-sm">
                  Products
                </h2>

                <p className="text-[11px] text-white/80">
                  View All Items
                </p>
              </div>

            </div>

          </div>
        </NavLink>

        <NavLink to="/Settings" className={linkStyle}>
          <Settings size={20} />
          <span className="hidden md:inline">Settings</span>
        </NavLink>

      </nav>

      {/* PROFILE */}
      <div className="mt-auto flex items-center justify-center md:justify-start bg-[#1e293b] p-2 md:p-3 rounded-xl">

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full w-8 h-8"
        />

        <div className="hidden md:block ml-3">
          <p className="text-sm font-semibold">Sakhawat</p>
          <span className="text-xs text-gray-400">Admin</span>
        </div>

      </div>
    </div>
  );
}