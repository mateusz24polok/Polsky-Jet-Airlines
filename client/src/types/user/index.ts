import { IPurchase } from "@appTypes/purchases";

export enum UserRole {
  NONE = "NONE",
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  _id: string;
  role: UserRole;
  purchases: IPurchase[];
  name: string;
  email: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  role: UserRole.USER;
  password: string;
  passwordConfirm: string;
}

export interface UserSignupAndLoginResponse {
  status: string;
  token: string;
  user: {
    role: UserRole;
    _id: string;
    name: string;
    email: string;
  };
}

export interface LoginFormAndRequest {
  email: string;
  password: string;
}

export interface UserServiceResponse {
  data: IUser;
  flightsCount: number;
}
