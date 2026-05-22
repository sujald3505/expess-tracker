// import React from "react";

// import { Navigate, Outlet } from "react-router";

// const AdminRoute = () => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"))
//   const isAdmin = user.role === "ADMIN"

//   return token && isAdmin ? <Outlet /> : <Navigate to="/login" />;
// };

// export default AdminRoute;

import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user")) || {};

  // TOKEN NATHI
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ADMIN NATHI
  if (user?.role !== "ADMIN") {
    return <Navigate to="/user/dashboard" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
