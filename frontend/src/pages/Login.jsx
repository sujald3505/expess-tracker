// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/user/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message);
//       }

//       // FIRST SAVE TOKEN
//       localStorage.setItem("token", data.token);

//       alert("Login Successful");

//       // THEN NAVIGATE
//       navigate("/admin/dashboard");

//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">

//       <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">

//         <h1 className="text-2xl font-bold text-center mb-5">
//           Login
//         </h1>

//         {error && (
//           <p className="text-red-500 mb-3 text-center">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="border p-2 w-full"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="border p-2 w-full"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button className="bg-blue-500 text-white w-full p-2 rounded">
//             Login
//           </button>

//           <div>
//               <p className="mt-4 text-center">
//           Already have account?

//           <NavLink to="/register" className="text-blue-500 ml-2">
//             Register
//           </NavLink>
//         </p>
//           </div>
//         </form>
        
//       </div>
      
//     </div>
//   );
// };

// export default Login;
// const handleLogin = async (e) => {

//   e.preventDefault();

//   try {

//     const response =
//       await fetch(
//         "http://localhost:8080/api/user/login",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify({

//             email,

//             password,
//           }),
//         }
//       );

//     const data =
//       await response.json();

//     if (data.success) {

//       localStorage.setItem(
//         "token",
//         data.token
//       );

//       // ADMIN
//       if (
//         data.role ===
//         "admin"
//       ) {

//         navigate(
//           "/admin/dashboard"
//         );

//       } else {

//         // USER
//         navigate(
//           "/user/dashboard"
//         );
//       }

//     } else {

//       alert(data.message);
//     }

//   } catch (error) {

//     console.log(error);
//   }
// };

// export default Login;
// import React from "react";

// const Login = () => {

//   return (

//     <div className="flex items-center justify-center min-h-screen bg-gray-100">

//       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           Login
//         </h1>

//         <form>

//           <input
//             type="email"
//             placeholder="Enter Email"
//             className="w-full border p-3 rounded-lg mb-4"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="w-full border p-3 rounded-lg mb-4"
//           />

//           <button
//             className="w-full bg-black text-white p-3 rounded-lg"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default Login;
// import React, {
//   useState,
// } from "react";

// import {
//   useNavigate,
// } from "react-router";

// const Login = () => {

//   const navigate =
//     useNavigate();

//   const [email, setEmail] =
//     useState("");

//   const [
//     password,
//     setPassword,
//   ] = useState("");

//   // LOGIN FUNCTION
//   const handleLogin =
//     async (e) => {

//       e.preventDefault();

//       try {

//         const response =
//           await fetch(
//             "http://localhost:8080/api/user/login",
//             {
//               method: "POST",

//               headers: {
//                 "Content-Type":
//                   "application/json",
//               },

//               body: JSON.stringify({

//                 email,

//                 password,
//               }),
//             }
//           );

//         const data =
//           await response.json();

//         console.log(data);

//         // SUCCESS
//         if (data.success) {

//           // SAVE TOKEN
//           localStorage.setItem(
//             "token",
//             data.token
//           );

//           // ADMIN LOGIN
//           if (
//             data.role ===
//             "admin"
//           ) {

//             navigate(
//               "/admin/dashboard"
//             );

//           } else {

//             // USER LOGIN
//             navigate(
//               "/user/dashboard"
//             );
//           }

//         } else {

//           alert(
//             data.message
//           );
//         }

//       } catch (error) {

//         console.log(error);

//         alert(
//           "Login Failed"
//         );
//       }
//     };

//   return (

//     <div className="flex items-center justify-center min-h-screen bg-gray-100">

//       <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           Login
//         </h1>

//         <form
//           onSubmit={
//             handleLogin
//           }
//         >

//           {/* EMAIL */}
//           <input
//             type="email"

//             placeholder="Enter Email"

//             value={email}

//             onChange={(e) =>
//               setEmail(
//                 e.target.value
//               )
//             }

//             className="w-full border p-3 rounded-lg mb-4"
//           />

//           {/* PASSWORD */}
//           <input
//             type="password"

//             placeholder="Enter Password"

//             value={password}

//             onChange={(e) =>
//               setPassword(
//                 e.target.value
//               )
//             }

//             className="w-full border p-3 rounded-lg mb-4"
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white p-3 rounded-lg"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default Login;



import React, {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

const Login = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  // LOGIN FUNCTION
  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await fetch(
            "http://localhost:8080/api/user/login",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                email,

                password,
              }),
            }
          );

        const data =
          await response.json();

        console.log(data);

        // SUCCESS
        if (data.success) {

          // SAVE TOKEN
          localStorage.setItem(
            "token",
            data.token
          );

          // SAVE USER
          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user
            )
          );

          // ADMIN LOGIN
          if (
            data.role ===
            "admin"
          ) {

            navigate(
              "/admin/dashboard"
            );

          } else {

            // USER LOGIN
            navigate(
              "/user/dashboard"
            );
          }

        } else {

          alert(
            data.message
          );
        }

      } catch (error) {

        console.log(error);

        alert(
          "Login Failed"
        );
      }
    };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form
          onSubmit={
            handleLogin
          }
        >

          {/* EMAIL */}
          <input
            type="email"

            placeholder="Enter Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="w-full border p-3 rounded-lg mb-4 outline-none"
          />

          {/* PASSWORD */}
          <input
            type="password"

            placeholder="Enter Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="w-full border p-3 rounded-lg mb-4 outline-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition duration-300"
          >
            Login
          </button>

        </form>

        {/* REGISTER */}
        <p className="text-center mt-5 text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-black font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;