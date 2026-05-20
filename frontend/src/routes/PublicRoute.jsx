// import React from "react";
// import { Navigate, Outlet } from "react-router";

// const PublicRoute = () => {
//   const token = localStorage.getItem("token");

//   return token ? <Navigate to="/dashboard" /> : <Outlet />;
// };

// export default PublicRoute;
import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/admin/dashboard" /> : <Outlet />;
};

export default PublicRoute;
