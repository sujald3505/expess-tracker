import React, { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");

  // ============================
  // GET CATEGORIES
  // ============================

  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8080/api/category", {
        method: "GET",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setCategories(data.categories || []);
    } catch (error) {
      console.log(error);
    }
  };

  // ============================
  // ADD CATEGORY
  // ============================

  const addCategory = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await fetch("http://localhost:8080/api/category/add", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          name,
        }),
      });

      setName("");

      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // ============================
  // DELETE CATEGORY
  // ============================

  const deleteCategory = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`http://localhost:8080/api/category/${id}`, {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // ============================
  // USE EFFECT
  // ============================

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AdminLayout>
      <div
        className="
        w-full
        min-h-screen
        bg-gray-100
        p-4
        sm:p-6
      "
      >
        {/* ================= HEADER ================= */}

        <div className="mb-6 md:mb-8">
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            text-gray-800
          "
          >
            Categories
          </h1>

          <p
            className="
            text-sm
            sm:text-base
            text-gray-500
            mt-1
          "
          >
            Manage expense categories
          </p>
        </div>

        {/* ================= ADD CATEGORY FORM ================= */}

        <form
          onSubmit={addCategory}
          className="
          bg-white
          p-4
          sm:p-6
          rounded-2xl
          shadow-lg
          mb-6
          md:mb-8
          flex
          flex-col
          sm:flex-row
          gap-4
        "
        >
          {/* INPUT */}

          <input
            type="text"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
            border
            border-gray-300
            w-full
            h-12.5
            px-4
            rounded-xl
            outline-none
            focus:border-black
          "
            required
          />

          {/* BUTTON */}

          <button
            type="submit"
            className="
            bg-black
            hover:bg-gray-800
            text-white
            h-12.5
            sm:w-37.5
            w-full
            rounded-xl
            font-semibold
            transition
            shrink-0
          "
          >
            Add Category
          </button>
        </form>

        {/* ================= MOBILE CARD VIEW ================= */}

        <div className="block md:hidden space-y-4">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div
                key={category._id}
                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {/* CATEGORY */}

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">Category</p>

                    <h2
                      className="
                        text-lg
                        font-semibold
                        text-gray-800
                        wrap-break-words
                      "
                    >
                      {category.name}
                    </h2>
                  </div>

                  {/* DELETE BUTTON */}

                  <button
                    onClick={() => deleteCategory(category._id)}
                    className="
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-medium
                      transition
                      shrink-0
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              className="
              bg-white
              rounded-2xl
              shadow-md
              p-10
              text-center
              text-gray-500
            "
            >
              No Categories Found
            </div>
          )}
        </div>

        {/* ================= DESKTOP TABLE VIEW ================= */}

        <div
          className="
          hidden
          md:block
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
        "
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* TABLE HEADER */}

              <thead
                className="
                bg-black
                text-white
              "
              >
                <tr>
                  <th
                    className="
                    text-left
                    px-6
                    py-4
                  "
                  >
                    Category Name
                  </th>

                  <th
                    className="
                    text-left
                    px-6
                    py-4
                  "
                  >
                    Action
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}

              <tbody>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <tr
                      key={category._id}
                      className="
                        border-b
                        hover:bg-gray-50
                        transition
                      "
                    >
                      {/* NAME */}

                      <td
                        className="
                          px-6
                          py-4
                          font-medium
                          text-gray-800
                        "
                      >
                        {category.name}
                      </td>

                      {/* ACTION */}

                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteCategory(category._id)}
                          className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-5
                            py-2
                            rounded-lg
                            font-medium
                            transition
                          "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      className="
                      text-center
                      py-20
                      text-gray-500
                    "
                    >
                      No Categories Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Categories;
