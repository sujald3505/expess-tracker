import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

const UserLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // MOBILE SIDEBAR
  const [openSidebar, setOpenSidebar] = useState(false);

  // GET USER
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menus = [
    {
      name: "🏠 Dashboard",
      path: "/user/dashboard",
    },
    {
      name: "➕ Add Transaction",
      path: "/user/addtransaction",
    },
    {
      name: "💰 Transactions",
      path: "/user/transaction",
    },
    {
      name: "📊 Reports",
      path: "/user/report",
    },
    {
      name: "💵 Budget",
      path: "/user/budget",
    },
    {
      name: "👤 Profile",
      path: "/user/profile",
    },
    {
      name: "⚙️ Settings",
      path: "/user/setting",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* ================= MOBILE OVERLAY ================= */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
        fixed top-0 left-0 z-50
        w-70 h-screen
        bg-black text-white
        flex flex-col
        transition-transform duration-300

        ${openSidebar ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
      >
        {/* LOGO */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>

          {/* CLOSE BTN */}
          <button onClick={() => setOpenSidebar(false)} className="lg:hidden">
            <X size={28} />
          </button>
        </div>

        {/* MENUS */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              onClick={() => setOpenSidebar(false)}
              className={`flex items-center px-5 h-13 rounded-xl text-base font-medium transition-all duration-300

              ${
                location.pathname === menu.path
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              {menu.name}
            </Link>
          ))}

          {/* ADMIN PANEL */}
          {user?.role === "ADMIN" && (
            <Link
              to="/admin/dashboard"
              onClick={() => setOpenSidebar(false)}
              className="flex items-center px-5 h-13 rounded-xl text-base font-medium transition-all duration-300 hover:bg-gray-800"
            >
              🛠️ Admin Panel
            </Link>
          )}
        </div>

        {/* LOGOUT */}
        <div className="p-5 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full h-12.5 bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 lg:ml-70 flex flex-col h-screen">
        {/* ================= TOPBAR ================= */}
        <div className="h-20 bg-white shadow-sm px-4 md:px-8 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setOpenSidebar(true)} className="lg:hidden">
              <Menu size={30} />
            </button>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800">
                Expense Tracker
              </h1>

              <p className="text-gray-500 text-xs md:text-sm mt-1 hidden sm:block">
                Manage your expenses easily
              </p>
            </div>
          </div>

          {/* USER PROFILE */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-right hidden sm:block">
              <h2 className="font-semibold text-gray-800">
                {user?.name || "User"}
              </h2>

              <p className="text-sm text-gray-500">Welcome Back</p>
            </div>

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center text-lg md:text-xl font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          </div>
        </div>

        {/* ================= PAGE CONTENT ================= */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
