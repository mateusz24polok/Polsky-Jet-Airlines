export enum UserRole {
  NONE = "NONE",
  USER = "USER",
  ADMIN = "ADMIN",
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
