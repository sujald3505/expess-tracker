import React, { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import UserLayout from "../../layouts/UserLayout";

const Reports = () => {
  // ============================
  // STATES
  // ============================

  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  const [categoryData, setCategoryData] = useState([]);

  const [loading, setLoading] = useState(true);

  // ============================
  // GET REPORTS
  // ============================

  const getReports = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8080/api/report/summary", {
        method: "GET",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setSummary({
        totalIncome: data.totalIncome || 0,

        totalExpense: data.totalExpense || 0,

        balance: data.balance || 0,
      });

      setCategoryData(data.categoryData || []);
    } catch (error) {
      console.log("Report Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // USE EFFECT
  // ============================

  useEffect(() => {
    getReports();
  }, []);

  // ============================
  // BAR DATA
  // ============================

  const barData = [
    {
      name: "Income",
      amount: summary.totalIncome,
    },

    {
      name: "Expense",
      amount: summary.totalExpense,
    },

    {
      name: "Balance",
      amount: summary.balance,
    },
  ];

  // ============================
  // CATEGORY COLORS
  // ============================

  const CATEGORY_COLORS = [
    "#3b82f6",
    "#22c55e",
    "#ef4444",
    "#f59e0b",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
  ];

  // ============================
  // LOADING
  // ============================

  if (loading) {
    return (
      <UserLayout>
        <div
          className="
          flex
          items-center
          justify-center
          h-[70vh]
          text-xl
          md:text-2xl
          font-bold
        "
        >
          Loading Reports...
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="w-full">
        {/* ================= HEADER ================= */}

        <div className="mb-6 md:mb-8">
          <h1
            className="
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-gray-800
          "
          >
            Reports
          </h1>

          <p
            className="
            text-sm
            md:text-base
            text-gray-500
            mt-2
          "
          >
            Financial analytics overview
          </p>
        </div>

        {/* ================= SUMMARY CARDS ================= */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-5
          mb-6
          md:mb-8
        "
        >
          {/* BALANCE */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            md:p-6
          "
          >
            <h3
              className="
              text-gray-500
              text-base
              md:text-lg
            "
            >
              Total Balance
            </h3>

            <h1
              className="
              text-3xl
              md:text-4xl
              font-bold
              mt-4
              text-blue-600
              break-words
            "
            >
              ₹ {summary.balance}
            </h1>
          </div>

          {/* INCOME */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            md:p-6
          "
          >
            <h3
              className="
              text-gray-500
              text-base
              md:text-lg
            "
            >
              Total Income
            </h3>

            <h1
              className="
              text-3xl
              md:text-4xl
              font-bold
              mt-4
              text-green-600
              break-words
            "
            >
              ₹ {summary.totalIncome}
            </h1>
          </div>

          {/* EXPENSE */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-5
            md:p-6
          "
          >
            <h3
              className="
              text-gray-500
              text-base
              md:text-lg
            "
            >
              Total Expense
            </h3>

            <h1
              className="
              text-3xl
              md:text-4xl
              font-bold
              mt-4
              text-red-600
              break-words
            "
            >
              ₹ {summary.totalExpense}
            </h1>
          </div>
        </div>

        {/* ================= CHARTS ================= */}

        <div
          className="
          grid
          grid-cols-1
          2xl:grid-cols-2
          gap-6
        "
        >
          {/* PIE CHART */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-4
            md:p-6
          "
          >
            <div
              className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-3
              mb-6
            "
            >
              <h2
                className="
                text-xl
                md:text-2xl
                font-semibold
              "
              >
                Category Wise Expenses
              </h2>
            </div>

            <div
              className="
              w-full
              h-[320px]
              sm:h-[380px]
              md:h-[420px]
            "
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={window.innerWidth < 640 ? 80 : 120}
                    dataKey="amount"
                    nameKey="category"
                    label
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* BAR CHART */}
          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-4
            md:p-6
          "
          >
            <div className="mb-6">
              <h2
                className="
                text-xl
                md:text-2xl
                font-semibold
              "
              >
                Financial Overview
              </h2>
            </div>

            <div
              className="
              w-full
              h-[320px]
              sm:h-[380px]
              md:h-[420px]
            "
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Legend />

                  <Bar
                    dataKey="amount"
                    fill="#3b82f6"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Reports;
