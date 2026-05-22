import React, { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import AdminLayout from "../../layouts/AdminLayout";

const Reports = () => {
  const [analytics, setAnalytics] = useState([]);

  // ============================
  // GET USER ANALYTICS
  // ============================

  const getAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:8080/api/report/analytics",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      setAnalytics(data.analytics || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnalytics();
  }, []);

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  return (
    <AdminLayout>
      {/* MAIN CONTAINER */}
      <div className="w-full min-h-screen">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Reports & Analytics
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Every User Financial Analytics
          </p>
        </div>

        {/* USER PIE CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {analytics.length > 0 ? (
            analytics.map((user, index) => {
              const chartData = [
                {
                  name: "Income",
                  value: user.totalIncome,
                },

                {
                  name: "Expense",
                  value: user.totalExpense,
                },

                {
                  name: "Balance",
                  value: user.balance,
                },
              ];

              return (
                <div key={index} className="bg-white rounded-3xl shadow-md p-6">
                  {/* USER INFO */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {user.name}
                    </h2>

                    <p className="text-gray-500">{user.email}</p>
                  </div>

                  {/* PIE CHART */}
                  <div className="w-full h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label
                        >
                          {chartData.map((entry, chartIndex) => (
                            <Cell key={chartIndex} fill={COLORS[chartIndex]} />
                          ))}
                        </Pie>

                        <Tooltip />

                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* USER SUMMARY */}
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Income</span>

                      <span className="font-bold text-green-600">
                        ₹ {user.totalIncome}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Expense</span>

                      <span className="font-bold text-red-600">
                        ₹ {user.totalExpense}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Balance</span>

                      <span className="font-bold text-blue-600">
                        ₹ {user.balance}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-3xl shadow-md p-10 text-center col-span-full">
              <h2 className="text-2xl font-bold text-gray-700">
                No Analytics Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;
