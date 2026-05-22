
import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const menus = [
    { name: "📊 Dashboard", path: "/admin/dashboard" },
    { name: "👥 Users", path: "/admin/user" },
    { name: "💰 Transactions", path: "/transaction" },
    { name: "📂 Categories", path: "/category" },
    { name: "📈 Reports", path: "/reports" },
    { name: "⚙️ Settings", path: "/setting" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div className="w-[280px] bg-black text-white flex flex-col fixed left-0 top-0 h-screen">

        {/* LOGO */}
        <div className="h-[90px] flex items-center px-6 border-b border-gray-800">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
        </div>

        {/* MENUS */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">

          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center h-[55px] px-5 rounded-xl text-lg font-medium transition-all duration-300
              
              ${
                activeMenu === menu.path
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              {menu.name}
            </Link>
          ))}

        </div>

        {/* FOOTER */}
        <div className="p-5 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full h-[50px] bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 ml-[280px] flex flex-col h-screen">

        {/* TOPBAR */}
        <div className="h-[90px] bg-white shadow-sm px-8 flex items-center justify-between">

          <h1 className="text-3xl font-bold text-gray-800">
            Expense Tracker Admin
          </h1>

          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
            A
          </div>

        </div>

        {/* PAGE CONTENT (ONLY THIS SCROLLS) */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;