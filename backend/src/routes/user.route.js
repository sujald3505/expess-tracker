// import { Router } from "express";
// import { blockUser, deleteUser, getUsers, loginUsers, registerUser, UnblockUser } from "../controllers/user.controllers.js";

// const userRoute = Router();

// userRoute.post("/register",registerUser)
// userRoute.post("/login",loginUsers)
// userRoute.get("/",getUsers)
// userRoute.delete("/:id",deleteUser)
// userRoute.put("/block/:id",blockUser)
// userRoute.put("/unblock/:id",UnblockUser)

// export default userRoute;
// import { Router } from "express";

// import {
//   blockUser,
//   deleteUser,
//   getUsers,
//   loginUsers,
//   registerUser,
//   UnblockUser,
// } from "../controllers/user.controllers.js";

// const userRoute = Router();

// // REGISTER
// userRoute.post("/register", registerUser);

// // LOGIN
// userRoute.post("/login", loginUsers);

// // GET USERS
// userRoute.get("/", getUsers);

// // DELETE USER
// userRoute.delete("/:id", deleteUser);

// // BLOCK USER
// userRoute.put("/block/:id", blockUser);

// // UNBLOCK USER
// userRoute.put("/unblock/:id", UnblockUser);

// export default userRoute;



import { Router } from "express";

import {
  deleteUser,
  getUsers,
  loginUser,
  registerUser,
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/user.controllers.js";

import { authenticate } from "../middleware/authenticate.js";

import { upload } from "../middleware/uploadMiddleware.js";

const userRoute = Router();

// ============================
// REGISTER
// ============================

userRoute.post(
  "/register",
  registerUser
);

// ============================
// LOGIN
// ============================

userRoute.post(
  "/login",
  loginUser
);

// ============================
// GET USERS
// ============================

userRoute.get(
  "/",
  getUsers
);

// ============================
// DELETE USER
// ============================

userRoute.delete(
  "/:id",
  deleteUser
);

// ============================
// GET PROFILE
// ============================

userRoute.get(
  "/profile",

  authenticate,

  getProfile
);

// ============================
// UPDATE PROFILE
// ============================

userRoute.put(
  "/profile",

  authenticate,

  upload.single(
    "profileImage"
  ),

  updateProfile
);

// ============================
// CHANGE PASSWORD
// ============================

userRoute.put(
  "/change-password",

  authenticate,

  changePassword
);

export default userRoute;