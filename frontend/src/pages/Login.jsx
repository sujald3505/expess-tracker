// import React, { useState } from "react";

// import { useNavigate, Link } from "react-router";

// import { toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   // ============================
//   // LOGIN FUNCTION
//   // ============================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/api/user/login", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           email,

//           password,
//         }),
//       });

//       const data = await response.json();

//       console.log(data);

//       // SUCCESS
//       if (data.success) {
//         // SUCCESS TOAST
//         toast.success("Login Successful");

//         // SAVE TOKEN
//         localStorage.setItem("token", data.token);

//         // SAVE USER
//         localStorage.setItem("user", JSON.stringify(data.user));

//         // ADMIN LOGIN
//         if (data.role === "admin") {
//           navigate("/admin/dashboard");
//         } else {
//           // USER LOGIN
//           navigate("/user/dashboard");
//         }
//       } else {
//         // ERROR TOAST
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);

//       toast.error("Login Failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
//         <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

//         <form onSubmit={handleLogin}>
//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border p-3 rounded-lg mb-4 outline-none"
//           />

//           {/* PASSWORD */}
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-3 rounded-lg mb-4 outline-none"
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="w-full bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* REGISTER */}
//         <p className="text-center mt-5 text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-black font-semibold">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

import { Link, useNavigate } from "react-router";

import { toast } from "react-toastify";

import { Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,

          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Login Successful");

        localStorage.setItem("token", data.token);

        localStorage.setItem("user", JSON.stringify(data.user));
        const userRole = data.user.role;

        if (userRole === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error("Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#edf2ff] overflow-hidden relative flex items-center justify-center px-5">
      {/* TOP LEFT CIRCLE */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-200 rounded-full opacity-50"></div>

      {/* BOTTOM RIGHT CIRCLE */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-blue-200 rounded-full opacity-40"></div>

      {/* CONTAINER */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-10 z-10">
        {/* LEFT SIDE */}
        <div className="w-full max-w-xl mx-auto">
          <h1 className="text-6xl font-bold text-[#111827] mb-16">Login</h1>

          <form onSubmit={handleLogin} className="space-y-10">
            {/* EMAIL */}
            <div>
              <label className="text-gray-600 block mb-3">Email</label>

              <div className="flex items-center border-b border-gray-400 pb-3">
                <Mail size={22} className="text-gray-500 mr-4" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-lg placeholder-gray-400"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-gray-600 block mb-3">Password</label>

              <div className="flex items-center border-b border-gray-400 pb-3">
                <Lock size={22} className="text-gray-500 mr-4" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none text-lg placeholder-gray-400"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-5">
              <p className="text-gray-600">
                Not Registered Yet?
                <Link
                  to="/register"
                  className="text-indigo-600 font-semibold ml-2 hover:underline"
                >
                  Register
                </Link>
              </p>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-3 rounded-lg font-bold shadow-lg transition duration-300"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex justify-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/expense-tracker-4488213-3723270.png"
              alt="login"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
