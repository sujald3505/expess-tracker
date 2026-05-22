// import React, { useEffect, useState } from "react";
// import AdminLayout from "../../layouts/AdminLayout";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     activeUsers: 0,
//     blockedUsers: 0,
//   });

//   // GET DASHBOARD STATS
//   const getDashboardStats = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         "http://localhost:8080/api/user",
//         {
//           method: "GET",

//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();

//       const totalUsers = data.users.length;

//       const blockedUsers = data.users.filter(
//         (user) => user.isBlocked
//       ).length;

//       const activeUsers =
//         totalUsers - blockedUsers;

//       setStats({
//         totalUsers,
//         activeUsers,
//         blockedUsers,
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDashboardStats();
//   }, []);

//   return (
//     <AdminLayout>
//     <div className="min-h-screen bg-gray-100">
       

//       {/* HEADER */}
//       <div className="bg-white shadow-md px-8 py-5 flex items-center justify-between">

//         <div>
         
//           <h1 className="text-3xl font-bold text-gray-800">
//             Admin Dashboard
//           </h1>

//           <p className="text-gray-500 mt-1">
//             Expense Tracker Admin Panel
//           </p>
//         </div>

//         {/* <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
//           Logout
//         </button> */}

//       </div>

//       {/* CONTENT */}
//       <div className="p-8">

//         {/* STATS CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {/* TOTAL USERS */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

//             <div className="flex items-center justify-between">

//               <div>
//                 <h3 className="text-gray-500 text-lg">
//                   Total Users
//                 </h3>

//                 <h1 className="text-4xl font-bold mt-2 text-black">
//                   {stats.totalUsers}
//                 </h1>
//               </div>

//               <div className="bg-blue-100 p-4 rounded-full text-3xl">
//                 👥
//               </div>

//             </div>

//           </div>

//           {/* ACTIVE USERS */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

//             <div className="flex items-center justify-between">

//               <div>
//                 <h3 className="text-gray-500 text-lg">
//                   Active Users
//                 </h3>

//                 <h1 className="text-4xl font-bold mt-2 text-green-600">
//                   {stats.activeUsers}
//                 </h1>
//               </div>

//               <div className="bg-green-100 p-4 rounded-full text-3xl">
//                 ✅
//               </div>

//             </div>

//           </div>

//           {/* BLOCKED USERS */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

//             <div className="flex items-center justify-between">

//               <div>
//                 <h3 className="text-gray-500 text-lg">
//                   Blocked Users
//                 </h3>

//                 <h1 className="text-4xl font-bold mt-2 text-red-600">
//                   {stats.blockedUsers}
//                 </h1>
//               </div>

//               <div className="bg-red-100 p-4 rounded-full text-3xl">
//                 🚫
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* RECENT SECTION */}
//         <div className="mt-10 bg-white rounded-2xl shadow-lg p-6">

//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Welcome Admin 👋
//           </h2>

//           <p className="text-gray-600 ">
//             This is your Expense Tracker admin dashboard.
//             Here you can manage users, transactions,
//             reports, analytics, and system settings.
//           </p>

//         </div>

//       </div>

//     </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    blockedUsers: 0,
  });

  // GET DASHBOARD STATS
  const getDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:8080/api/user",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      const totalUsers = data.users.length;

      const blockedUsers = data.users.filter(
        (user) => user.isBlocked
      ).length;

      const activeUsers =
        totalUsers - blockedUsers;

      setStats({
        totalUsers,
        activeUsers,
        blockedUsers,
      });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboardStats();
  }, []);

  return (
    <AdminLayout>

      {/* MAIN CONTAINER */}
      <div className="w-full min-h-screen bg-gray-100 pl-6">

        {/* HEADER */}
        <div className="w-full bg-white shadow-md rounded-2xl px-8 py-6 mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-2  ">
            Expense Tracker Admin Panel
          </p>

        </div>

        {/* STATS CARDS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* TOTAL USERS */}
          <div className="w-full h-[170px] bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500 text-lg">
                Total Users
              </h3>

              <h1 className="text-5xl font-bold mt-4 text-black">
                {stats.totalUsers}
              </h1>

            </div>

            <div className="w-[90px] h-[90px] bg-blue-100 rounded-full flex items-center justify-center text-4xl">
              👥
            </div>

          </div>

          {/* ACTIVE USERS */}
          <div className="w-full h-[170px] bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500 text-lg">
                Active Users
              </h3>

              <h1 className="text-5xl font-bold mt-4 text-green-600">
                {stats.activeUsers}
              </h1>

            </div>

            <div className="w-[90px] h-[90px] bg-green-100 rounded-full flex items-center justify-center text-4xl">
              ✅
            </div>

          </div>

          {/* BLOCKED USERS */}
          <div className="w-full h-[170px] bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500 text-lg">
                Blocked Users
              </h3>

              <h1 className="text-5xl font-bold mt-4 text-red-600">
                {stats.blockedUsers}
              </h1>

            </div>

            <div className="w-[90px] h-[90px] bg-red-100 rounded-full flex items-center justify-center text-4xl">
              🚫
            </div>

          </div>

        </div>

        {/* WELCOME SECTION */}
        <div className="w-full min-h-[220px] mt-8 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">

          <h2 className="text-3xl font-semibold text-gray-800 mb-5">
            Welcome Admin 👋
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-[1000px]">
            This is your Expense Tracker admin dashboard.
            Here you can manage users, transactions,
            reports, analytics, and system settings.
          </p>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;



// import React, {
//   useEffect,
//   useState,
// } from "react";

// import AdminLayout from "../../layouts/AdminLayout";

// const Dashboard = () => {

//   const [
//     dashboardData,
//     setDashboardData,
//   ] = useState({
//     totalUsers: 0,

//     totalTransactions: 0,

//     transactions: [],
//   });

//   // GET DASHBOARD DATA
//   const getDashboard =
//     async () => {

//       try {

//         const token =
//           localStorage.getItem(
//             "token"
//           );

//         const response =
//           await fetch(
//             "http://localhost:8080/api/admin/dashboard",
//             {
//               method: "GET",

//               headers: {
//                 Authorization:
//                   `Bearer ${token}`,
//               },
//             }
//           );

//         const data =
//           await response.json();

//         console.log(data);

//         setDashboardData({
//           totalUsers:
//             data.totalUsers || 0,

//           totalTransactions:
//             data.totalTransactions || 0,

//           transactions:
//             data.transactions || [],
//         });

//       } catch (error) {

//         console.log(error);
//       }
//     };

//   useEffect(() => {
//     getDashboard();
//   }, []);

//   return (

//     <AdminLayout>

//       <div className="w-full min-h-screen bg-gray-100 p-6">

//         {/* HEADER */}
//         <div className="mb-8">

//           <h1 className="text-4xl font-bold text-gray-800">
//             Admin Dashboard
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Overview of all users and transactions
//           </p>

//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

//           {/* TOTAL USERS */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <h2 className="text-gray-500 text-lg">
//               Total Users
//             </h2>

//             <h1 className="text-5xl font-bold mt-4 text-blue-600">
//               {
//                 dashboardData.totalUsers
//               }
//             </h1>

//           </div>

//           {/* TOTAL TRANSACTIONS */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <h2 className="text-gray-500 text-lg">
//               Total Transactions
//             </h2>

//             <h1 className="text-5xl font-bold mt-4 text-green-600">
//               {
//                 dashboardData.totalTransactions
//               }
//             </h1>

//           </div>

//         </div>

//         {/* TRANSACTION TABLE */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

//           <h2 className="text-2xl font-semibold mb-6">
//             All Transactions
//           </h2>

//           <table className="w-full min-w-[900px]">

//             <thead>

//               <tr className="border-b">

//                 <th className="text-left py-4">
//                   User
//                 </th>

//                 <th className="text-left py-4">
//                   Email
//                 </th>

//                 <th className="text-left py-4">
//                   Title
//                 </th>

//                 <th className="text-left py-4">
//                   Amount
//                 </th>

//                 <th className="text-left py-4">
//                   Type
//                 </th>

//                 <th className="text-left py-4">
//                   Category
//                 </th>

//                 <th className="text-left py-4">
//                   Date
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {dashboardData.transactions?.length > 0 ? (

//                 dashboardData.transactions?.map(
//                   (item) => (

//                     <tr
//                       key={item._id}
//                       className="border-b hover:bg-gray-50"
//                     >

//                       <td className="py-4">
//                         {
//                           item.user
//                             ?.name ||
//                           "N/A"
//                         }
//                       </td>

//                       <td className="py-4">
//                         {
//                           item.user
//                             ?.email ||
//                           "N/A"
//                         }
//                       </td>

//                       <td className="py-4">
//                         {item.title}
//                       </td>

//                       <td className="py-4 font-semibold">
//                         ₹ {item.amount}
//                       </td>

//                       <td
//                         className={`py-4 font-semibold ${
//                           item.type ===
//                           "income"
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {item.type}
//                       </td>

//                       <td className="py-4">
//                         {
//                           item.category
//                         }
//                       </td>

//                       <td className="py-4">
//                         {new Date(
//                           item.date
//                         ).toLocaleDateString()}
//                       </td>

//                     </tr>
//                   )
//                 )

//               ) : (

//                 <tr>

//                   <td
//                     colSpan="7"
//                     className="text-center py-10 text-gray-500"
//                   >
//                     No Transactions Found
//                   </td>

//                 </tr>
//               )}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </AdminLayout>
//   );
// };

// export default Dashboard;