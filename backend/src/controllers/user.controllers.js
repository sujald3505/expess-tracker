import { User } from "../models/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const JWT_SECRET_KEY = "MY_SECRET_KEY";

// ============================
// REGISTER USER
// ============================

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // CHECK EXISTING USER
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "USER",
    });

    res.status(201).json({
      success: true,
      message: "Register Success",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// LOGIN USER + ADMIN
// ============================

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // =========================
    // STATIC ADMIN LOGIN
    // =========================

    if (email === "sujaladmin@gmail.com" && password === "admin@3505") {
      const token = jwt.sign(
        {
          role: "admin",
        },

        JWT_SECRET_KEY,

        {
          expiresIn: "7d",
        }
      );

      return res.status(200).json({
        success: true,
        role: "admin",
        token,
        message: "Admin Login Success",
      });
    }

    // =========================
    // USER LOGIN
    // =========================

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        userId: user._id,
        role: "user",
      },

      JWT_SECRET_KEY,

      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      role: "user",
      token,
      user,
      message: "Login Success",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// GET USERS
// ============================

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// DELETE USER
// ============================

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// GET PROFILE
// ============================

export const getProfile = async (req, res) => {
  try {
    // CHECK USER ID
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // FIND USER
    const user = await User.findById(req.userId).select("-password");

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// UPDATE PROFILE
// ============================

export const updateProfile = async (req, res) => {
  try {
    // CHECK USER ID
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const {
      name,
      email,
      phone,
      gender,
      dob,
      address,
      profession,
    } = req.body;

    // UPDATE DATA
    const updateData = {
      name,
      email,
      phone,
      gender,
      dob,
      address,
      profession,
    };

    // IMAGE UPLOAD
    if (req.file) {
      updateData.profileImage = req.file.filename;
    }

    // UPDATE USER
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      {
        new: true,
      }
    ).select("-password");

    // USER NOT FOUND
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// CHANGE PASSWORD
// ============================

export const changePassword = async (req, res) => {
  try {
    const {
      currentPassword,
      newPassword,
    } = req.body;

    // CHECK USER ID
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // FIND USER
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    // CHECK CURRENT PASSWORD
    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current Password Incorrect",
      });
    }

    // HASH NEW PASSWORD
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    // UPDATE PASSWORD
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};