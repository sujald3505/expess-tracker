
import React from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

const UserLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // GET USER
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menus = [
    { name: "🏠 Dashboard", path: "/user/dashboard" },
    { name: "➕ Add Transaction", path: "/user/addtransaction" },
    { name: "💰 Transactions", path: "/user/transaction" },
    { name: "📊 Reports", path: "/user/report" },
    { name: "👤 Profile", path: "/user/profile" },
    { name: "⚙️ Settings", path: "/user/setting" },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div className="w-[280px] bg-black text-white flex flex-col fixed left-0 top-0 h-screen">

        {/* LOGO */}
        <div className="h-[90px] flex items-center px-6 border-b border-gray-800">
          <h1 className="text-3xl font-bold">
            Expense Tracker
          </h1>
        </div>

        {/* MENUS */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">

          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center h-[55px] px-5 rounded-xl text-lg font-medium transition-all duration-300
              
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
              className="flex items-center h-[55px] px-5 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-gray-800"
            >
              🛠️ Admin Panel
            </Link>
          )}
        </div>

        {/* LOGOUT */}
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

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Expense Tracker
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your expenses easily
            </p>
          </div>

          {/* USER PROFILE */}
          <div className="flex items-center gap-4">

            <div className="text-right">
              <h2 className="font-semibold text-gray-800">
                {user?.name || "User"}
              </h2>
              <p className="text-sm text-gray-500">
                Welcome Back
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

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

export default UserLayout;