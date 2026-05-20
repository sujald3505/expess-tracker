// import { Users } from "../models/user.model.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// export const JWT_SECRET_KEY = "jdhgureyhj";

// export const registerUser = async (req, res) => {
//   try {
//     const userData = req.body;

//     const hasedPassword = await bcrypt.hash(userData.password, 10);
//     userData.password = hasedPassword;

//     const hasedPasswordd = await bcrypt.hash(userData.confirmPassword, 10);
//     userData.confirmPassword = hasedPasswordd;

//     const user = await Users.create(userData);
//     res.status(201).json({ message: "User Created", user });
//   } catch (error) {
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// };

// export const loginUsers = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Email and password are required" });
//     }
//     const user = await Users.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Email is wrong" });
//     }
//     const isVaild = await bcrypt.compare(password, user.password);

//     if (!isVaild) {
//       return res.status(400).json({ message: " Password is wrong" });
//     }

//     const token = await jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
//       expiresIn: "1d",
//     });

//     res.status(200).json({ message: "Login successfully", user, token });
//   } catch (error) {
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// };

// export const getUsers = async (req, res) => {
//   try {
//     const users = await Users.find();
//     res.status(200).json({ message: "user fetched", users });
//   } catch (error) {
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// };

// export const deleteUser = async (req, res) => {
//   try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//         return res.status(404).json({ message: "User not found",});
//         }

//         await user.deleteOne();

//         res.status(200).json({ success: true,message: "User deleted",});
//   } catch (error) {
//        res.status(500).json({ message: error.message,});
//   }
// };

// export const blockUser = async(req,res) =>{
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User Not found",})
//         }
//         user.isBlocked = true;
//         await user.save();
//         res.status(200).json({ success: true, message: "User blocked",});
//     } catch (error) {
//          res.status(500).json({ message: error.message,});
//     }
// }

// export const UnblockUser = async(req,res) =>{
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User Not found",})
//         }
//         user.isBlocked = true;
//         await user.save();
//         res.status(200).json({ success: true, message: "User Unblocked",});
//     } catch (error) {
//          res.status(500).json({ message: error.message,});
//     }
// }
import { User } from "../models/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const JWT_SECRET_KEY = "MY_SECRET_KEY";

// ============================
// REGISTER USER
// ============================

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // CHECK USER
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
    });

    res.status(201).json({
      success: true,

      message: "Register Success",

      user,
    });
  } catch (error) {
    res.status(500).json({
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
        },
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

      user.password,
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
      },
    );

    res.status(200).json({
      success: true,

      role: "user",

      token,

      user,

      message: "Login Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// GET USERS
// ============================

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,

      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// DELETE USER
// ============================

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,

      message: "User Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};
// ============================
// GET PROFILE
// ============================

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,

      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

// ============================
// UPDATE PROFILE
// ============================

export const updateProfile = async (req, res) => {
  try {
    const {
      name,

      email,

      phone,

      gender,

      dob,

      address,

      profession,
    } = req.body;

    const updateData = {
      name,

      email,

      phone,

      gender,

      dob,

      address,

      profession,
    };

    // IMAGE
    if (req.file) {
      updateData.profileImage = req.file.filename;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,

      updateData,

      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,

      message: "Profile Updated",

      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};
// ============================
// CHANGE PASSWORD
// ============================

export const changePassword =
  async (req, res) => {

    try {

      const {

        currentPassword,

        newPassword,

      } = req.body;

      // FIND USER
      const user =
        await User.findById(
          req.userId
        );

      // CHECK PASSWORD
      const isMatch =
        await bcrypt.compare(

          currentPassword,

          user.password
        );

      if (!isMatch) {

        return res.status(400).json({

          success: false,

          message:
            "Current Password Incorrect",
        });
      }

      // HASH NEW PASSWORD
      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          10
        );

      // UPDATE PASSWORD
      user.password =
        hashedPassword;

      await user.save();

      res.status(200).json({

        success: true,

        message:
          "Password Updated Successfully",
      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message ||
          "Internal Server Error",
      });
    }
  };
