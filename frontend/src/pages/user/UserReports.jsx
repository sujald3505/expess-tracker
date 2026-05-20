// import React, { useEffect, useState } from "react";

// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// import UserLayout from "../../layouts/UserLayout";

// const Reports = () => {
//   const [summary, setSummary] = useState({
//     totalIncome: 0,
//     totalExpense: 0,
//     balance: 0,
//   });

//   // GET REPORT DATA
//   const getReports = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch("http://localhost:8080/api/report/summary", {
//         method: "GET",

//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       setSummary(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getReports();
//   }, []);

//   // CHART DATA
//   const chartData = [
//     {
//       name: "Income",
//       value: summary.totalIncome,
//     },

//     {
//       name: "Expense",
//       value: summary.totalExpense,
//     },
//   ];

//   const COLORS = ["#22c55e", "#ef4444"];

//   return (
//     <UserLayout>
//       <div className="w-full min-h-screen bg-gray-100 p-6">
//         {/* HEADER */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-800">Reports</h1>

//           <p className="text-gray-500 mt-2">Financial analytics overview</p>
//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* BALANCE */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <h3 className="text-gray-500 text-lg">Total Balance</h3>

//             <h1 className="text-4xl font-bold mt-4 text-blue-600">
//               ₹ {summary.balance}
//             </h1>
//           </div>

//           {/* INCOME */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <h3 className="text-gray-500 text-lg">Total Income</h3>

//             <h1 className="text-4xl font-bold mt-4 text-green-600">
//               ₹ {summary.totalIncome}
//             </h1>
//           </div>

//           {/* EXPENSE */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <h3 className="text-gray-500 text-lg">Total Expense</h3>

//             <h1 className="text-4xl font-bold mt-4 text-red-600">
//               ₹ {summary.totalExpense}
//             </h1>
//           </div>
//         </div>

//         {/* CHART */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">
//           <h2 className="text-2xl font-semibold mb-6">Income vs Expense</h2>

//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={150}
//                 dataKey="value"
//                 label
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index]} />
//                 ))}
//               </Pie>

//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </UserLayout>
//   );
// };

// export default Reports;

import React, {
  useEffect,
  useState,
} from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import UserLayout from "../../layouts/UserLayout";

const Reports = () => {

  const [summary, setSummary] =
    useState({
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
    });

  // ============================
  // GET REPORT DATA
  // ============================

  const getReports =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await fetch(
            "http://localhost:8080/api/report/summary",
            {
              method: "GET",

              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const data =
          await response.json();

        setSummary(data);

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    getReports();

  }, []);

  // ============================
  // PIE CHART DATA
  // ============================

  const pieData = [
    {
      name: "Income",
      value:
        summary.totalIncome,
    },

    {
      name: "Expense",
      value:
        summary.totalExpense,
    },
  ];

  // ============================
  // BAR CHART DATA
  // ============================

  const barData = [
    {
      name: "Income",

      amount:
        summary.totalIncome,
    },

    {
      name: "Expense",

      amount:
        summary.totalExpense,
    },

    {
      name: "Balance",

      amount:
        summary.balance,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (

    <UserLayout>

      <div className="w-full min-h-screen bg-gray-100 p-6">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Financial analytics overview
          </p>

        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* BALANCE */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-gray-500 text-lg">
              Total Balance
            </h3>

            <h1 className="text-4xl font-bold mt-4 text-blue-600">
              ₹ {summary.balance}
            </h1>

          </div>

          {/* INCOME */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-gray-500 text-lg">
              Total Income
            </h3>

            <h1 className="text-4xl font-bold mt-4 text-green-600">
              ₹ {summary.totalIncome}
            </h1>

          </div>

          {/* EXPENSE */}
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-gray-500 text-lg">
              Total Expense
            </h3>

            <h1 className="text-4xl font-bold mt-4 text-red-600">
              ₹ {summary.totalExpense}
            </h1>

          </div>

        </div>

        {/* CHART SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PIE CHART */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">

            <h2 className="text-2xl font-semibold mb-6">
              Income vs Expense
            </h2>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  dataKey="value"
                  label
                >

                  {pieData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index
                          ]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* BAR CHART */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">

            <h2 className="text-2xl font-semibold mb-6">
              Financial Overview
            </h2>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={barData}
              >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="amount"
                  fill="#000000"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </UserLayout>
  );
};

export default Reports;