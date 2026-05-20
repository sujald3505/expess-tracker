import React, { useState } from "react";

import UserLayout from "../../layouts/UserLayout";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  // CHANGE PASSWORD
  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:8080/api/user/change-password",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            currentPassword,

            newPassword,
          }),
        },
      );

      const data = await response.json();

      alert(data.message);

      setCurrentPassword("");

      setNewPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserLayout>
      <div className="w-full min-h-screen bg-gray-100 p-6">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Settings</h1>

          <p className="text-gray-500 mt-2">Manage your account settings</p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Change Password</h2>

          <form onSubmit={handleChangePassword} className="space-y-5">
            {/* CURRENT PASSWORD */}
            <div>
              <label className="block mb-2 font-semibold">
                Current Password
              </label>

              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full h-[55px] border rounded-xl px-4"
              />
            </div>

            {/* NEW PASSWORD */}
            <div>
              <label className="block mb-2 font-semibold">New Password</label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full h-[55px] border rounded-xl px-4"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full h-[55px] bg-black hover:bg-gray-800 text-white rounded-xl text-lg font-semibold transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default Settings;
