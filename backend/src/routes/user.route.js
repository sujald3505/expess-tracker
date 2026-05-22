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