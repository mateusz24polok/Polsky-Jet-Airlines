import mongoose, { Document, Model, Schema, Types } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { PurchaseBaseDocument } from "./purchaseModel";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  name: string;
  email: string;
  role: Role;
  password: string | undefined;
  passwordConfirm: string | undefined;
  purchases: Array<PurchaseBaseDocument["_id"]>;
  correctPassword: (
    candidatePassword: string,
    userPassword: string
  ) => Promise<boolean>;
}

export interface UserBaseDocument extends IUser, Document {
  purchases: Types.Array<string>;
}

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Provide username"],
  },
  email: {
    type: String,
    required: [true, "Provide an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  password: {
    type: String,
    required: [true, "Provide your password"],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm you password"],
    validate: {
      // This only works on CREATE AND SAVE!!!
      validator: function (val: string): Boolean {
        return (this as unknown as UserBaseDocument).password === val;
      },
      message: "Confirmation of password is incorrect",
    },
  },
  purchases: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: [],
    ref: "Purchase",
  },
});

userSchema.pre<UserBaseDocument>("save", async function (next) {
  //Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password as string, 12);

  //Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export const User = mongoose.model<UserBaseDocument, Model<UserBaseDocument>>(
  "User",
  userSchema
);
