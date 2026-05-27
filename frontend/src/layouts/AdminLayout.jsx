
// import React, { useEffect, useState } from "react";

// import { Link, useLocation, useNavigate } from "react-router-dom";

// const AdminLayout = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [activeMenu, setActiveMenu] = useState("");

//   useEffect(() => {
//     setActiveMenu(location.pathname);
//   }, [location.pathname]);

//   const menus = [
//     { name: "📊 Dashboard", path: "/admin/dashboard" },
//     { name: "👥 Users", path: "/admin/user" },
//     { name: "💰 Transactions", path: "/transaction" },
//     { name: "📂 Categories", path: "/category" },
//     { name: "📈 Reports", path: "/reports" },
//     { name: "⚙️ Settings", path: "/setting" },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-100">

//       {/* ================= SIDEBAR ================= */}
//       <div className="w-[280px] bg-black text-white flex flex-col fixed left-0 top-0 h-screen">

//         {/* LOGO */}
//         <div className="h-[90px] flex items-center px-6 border-b border-gray-800">
//           <h1 className="text-4xl font-bold">Admin Panel</h1>
//         </div>

//         {/* MENUS */}
//         <div className="flex-1 p-4 space-y-3 overflow-y-auto">

//           {menus.map((menu) => (
//             <Link
//               key={menu.path}
//               to={menu.path}
//               className={`flex items-center h-[55px] px-5 rounded-xl text-lg font-medium transition-all duration-300
              
//               ${
//                 activeMenu === menu.path
//                   ? "bg-white text-black"
//                   : "hover:bg-gray-800"
//               }`}
//             >
//               {menu.name}
//             </Link>
//           ))}

//         </div>

//         {/* FOOTER */}
//         <div className="p-5 border-t border-gray-800">
//           <button
//             onClick={handleLogout}
//             className="w-full h-[50px] bg-red-500 hover:bg-red-600 rounded-xl text-lg font-semibold transition duration-300"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* ================= RIGHT SIDE ================= */}
//       <div className="flex-1 ml-[280px] flex flex-col h-screen">

//         {/* TOPBAR */}
//         <div className="h-[90px] bg-white shadow-sm px-8 flex items-center justify-between">

//           <h1 className="text-3xl font-bold text-gray-800">
//             Expense Tracker Admin
//           </h1>

//           <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
//             A
//           </div>

//         </div>

//         {/* PAGE CONTENT (ONLY THIS SCROLLS) */}
//         <div className="flex-1 p-8 overflow-y-auto">
//           {children}
//         </div>

//       </div>

//     </div>
//   );
// };

// export default AdminLayout;









import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] =
    useState("");

  // MOBILE SIDEBAR
  const [openSidebar, setOpenSidebar] =
    useState(false);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  const menus = [
    {
      name: "📊 Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "👥 Users",
      path: "/admin/user",
    },
    {
      name: "💰 Transactions",
      path: "/transaction",
    },
    {
      name: "📂 Categories",
      path: "/category",
    },
    {
      name: "📈 Reports",
      path: "/reports",
    },
    {
      name: "⚙️ Settings",
      path: "/setting",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* ================= MOBILE OVERLAY ================= */}
      {openSidebar && (
        <div
          onClick={() =>
            setOpenSidebar(false)
          }
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
        fixed top-0 left-0 z-50
        w-[280px] h-screen
        bg-black text-white
        flex flex-col
        transition-transform duration-300

        ${
          openSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
      >
        {/* LOGO */}
        <div className="h-[80px] flex items-center justify-between px-6 border-b border-gray-800">

          <h1 className="text-2xl md:text-3xl font-bold">
            Admin Panel
          </h1>

          {/* CLOSE BUTTON */}
          <button
            onClick={() =>
              setOpenSidebar(false)
            }
            className="lg:hidden"
          >
            <X size={28} />
          </button>
        </div>

        {/* MENUS */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">

          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              onClick={() =>
                setOpenSidebar(false)
              }
              className={`flex items-center px-5 h-[52px] rounded-xl text-base font-medium transition-all duration-300

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
      <div className="flex-1 lg:ml-[280px] flex flex-col h-screen">

        {/* ================= TOPBAR ================= */}
        <div className="h-[80px] bg-white shadow-sm px-4 md:px-8 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setOpenSidebar(true)
              }
              className="lg:hidden"
            >
              <Menu size={30} />
            </button>

            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800">
                Expense Tracker Admin
              </h1>

              <p className="text-gray-500 text-xs md:text-sm mt-1 hidden sm:block">
                Manage users & transactions
              </p>
            </div>
          </div>

          {/* ADMIN PROFILE */}
          <div className="flex items-center gap-3">

            <div className="text-right hidden sm:block">
              <h2 className="font-semibold text-gray-800">
                Admin
              </h2>

              <p className="text-sm text-gray-500">
                Welcome Back
              </p>
            </div>

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center text-lg md:text-xl font-bold">
              A
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

export default AdminLayout;