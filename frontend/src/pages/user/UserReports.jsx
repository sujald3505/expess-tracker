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

// import React, {
//   useEffect,
//   useState,
// } from "react";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
// } from "recharts";

// import UserLayout from "../../layouts/UserLayout";

// const Reports = () => {

//   const [summary, setSummary] =
//     useState({
//       totalIncome: 0,
//       totalExpense: 0,
//       balance: 0,
//     });

//   // ============================
//   // GET REPORT DATA
//   // ============================

//   const getReports =
//     async () => {

//       try {

//         const token =
//           localStorage.getItem(
//             "token"
//           );

//         const response =
//           await fetch(
//             "http://localhost:8080/api/report/summary",
//             {
//               method: "GET",

//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//         const data =
//           await response.json();

//         setSummary(data);

//       } catch (error) {

//         console.log(error);
//       }
//     };

//   useEffect(() => {

//     getReports();

//   }, []);

//   // ============================
//   // PIE CHART DATA
//   // ============================

//   const pieData = [
//     {
//       name: "Income",
//       value:
//         summary.totalIncome,
//     },

//     {
//       name: "Expense",
//       value:
//         summary.totalExpense,
//     },
//   ];

//   // ============================
//   // BAR CHART DATA
//   // ============================

//   const barData = [
//     {
//       name: "Income",

//       amount:
//         summary.totalIncome,
//     },

//     {
//       name: "Expense",

//       amount:
//         summary.totalExpense,
//     },

//     {
//       name: "Balance",

//       amount:
//         summary.balance,
//     },
//   ];

//   const COLORS = [
//     "#22c55e",
//     "#ef4444",
//   ];

//   return (

//     <UserLayout>

//       <div className="w-full min-h-screen bg-gray-100 p-6">

//         {/* HEADER */}
//         <div className="mb-8">

//           <h1 className="text-4xl font-bold text-gray-800">
//             Reports
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Financial analytics overview
//           </p>

//         </div>

//         {/* SUMMARY CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

//           {/* BALANCE */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <h3 className="text-gray-500 text-lg">
//               Total Balance
//             </h3>

//             <h1 className="text-4xl font-bold mt-4 text-blue-600">
//               ₹ {summary.balance}
//             </h1>

//           </div>

//           {/* INCOME */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <h3 className="text-gray-500 text-lg">
//               Total Income
//             </h3>

//             <h1 className="text-4xl font-bold mt-4 text-green-600">
//               ₹ {summary.totalIncome}
//             </h1>

//           </div>

//           {/* EXPENSE */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <h3 className="text-gray-500 text-lg">
//               Total Expense
//             </h3>

//             <h1 className="text-4xl font-bold mt-4 text-red-600">
//               ₹ {summary.totalExpense}
//             </h1>

//           </div>

//         </div>

//         {/* CHART SECTION */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* PIE CHART */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">

//             <h2 className="text-2xl font-semibold mb-6">
//               Income vs Expense
//             </h2>

//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >

//               <PieChart>

//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={150}
//                   dataKey="value"
//                   label
//                 >

//                   {pieData.map(
//                     (
//                       entry,
//                       index
//                     ) => (

//                       <Cell
//                         key={index}
//                         fill={
//                           COLORS[
//                             index
//                           ]
//                         }
//                       />
//                     )
//                   )}

//                 </Pie>

//                 <Tooltip />

//               </PieChart>

//             </ResponsiveContainer>

//           </div>

//           {/* BAR CHART */}
//           <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">

//             <h2 className="text-2xl font-semibold mb-6">
//               Financial Overview
//             </h2>

//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >

//               <BarChart
//                 data={barData}
//               >

//                 <CartesianGrid strokeDasharray="3 3" />

//                 <XAxis dataKey="name" />

//                 <YAxis />

//                 <Tooltip />

//                 <Legend />

//                 <Bar
//                   dataKey="amount"
//                   fill="#000000"
//                   radius={[
//                     10,
//                     10,
//                     0,
//                     0,
//                   ]}
//                 />

//               </BarChart>

//             </ResponsiveContainer>

//           </div>

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
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import UserLayout from "../../layouts/UserLayout";

const Reports = () => {

  // ============================
  // STATES
  // ============================

  const [summary, setSummary] =
    useState({
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
      categoryData: [],
    });

  const [monthlyData, setMonthlyData] =
    useState([]);

  // ============================
  // GET SUMMARY REPORT
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
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        const data =
          await response.json();

        setSummary({
          totalIncome:
            data.totalIncome || 0,

          totalExpense:
            data.totalExpense || 0,

          balance:
            data.balance || 0,

          categoryData:
            data.categoryData || [],
        });

      } catch (error) {

        console.log(error);
      }
    };

  // ============================
  // GET MONTHLY REPORT
  // ============================

  const getMonthlyReport =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await fetch(
            "http://localhost:8080/api/report/monthly",
            {
              method: "GET",

              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        const data =
          await response.json();

        const months = [
          "",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        const formattedData =
          data.report.map(
            (item) => ({
              month:
                months[
                  item._id.month
                ],

              income:
                item.income,

              expense:
                item.expense,
            })
          );

        setMonthlyData(
          formattedData
        );

      } catch (error) {

        console.log(error);
      }
    };

  // ============================
  // USE EFFECT
  // ============================

  useEffect(() => {

    getReports();

    getMonthlyReport();

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
  // COLORS
  // ============================

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6",
    "#ec4899",
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
                          COLORS[index]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* CATEGORY PIE CHART */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px]">

            <h2 className="text-2xl font-semibold mb-6">
              Category Wise Expense
            </h2>

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={
                    summary.categoryData || []
                  }
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  dataKey="amount"
                  nameKey="category"
                  label
                >

                  {summary.categoryData?.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* MONTHLY ANALYTICS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px] mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Monthly Analytics
          </h2>

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={monthlyData}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="income"
                stroke="#22c55e"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#ef4444"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </UserLayout>
  );
};

export default Reports;