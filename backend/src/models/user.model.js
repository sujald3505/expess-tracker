// import { model , Schema} from "mongoose";

// const userSchema = new Schema(
//     {
//         name: String,
//         email: String,
//         password: String,
//         confirmPassword: String

//     }
// )

// export const Users = new model ("users",userSchema)

// import { model, Schema } from "mongoose";

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,

//       unique: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },
//   },

//   {
//     timestamps: true,
//   },
// );

// export const User = model("User", userSchema);

import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    phone: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      default: "",
    },

    dob: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    profession: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    role : {
      type:String,
      default: "USER",
      enum: ["USER", "ADMIN"]
    }
  },

  {
    timestamps: true,
  },
);

export const User = model("User", userSchema);
