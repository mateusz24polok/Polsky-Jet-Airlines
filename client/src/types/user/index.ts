export enum UserRole {
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

export interface NewUserSignupResponse {
  status: string;
  token: string;
  user: {
    role: UserRole;
    _id: string;
    name: string;
    email: string;
  };
}
