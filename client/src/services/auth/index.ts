import axios, { AxiosResponse } from "axios";
import {
  LoginFormAndRequest,
  SignupRequest,
  UserSignupAndLoginResponse,
} from "@appTypes/user";

const userAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/user`,
});

export const postRegisterNewUserService = async (
  newUserRequest: SignupRequest,
) => {
  try {
    await userAxiosInstance.post("/signup", newUserRequest);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const postLoginUserService = async (
  userLoginData: LoginFormAndRequest,
): Promise<UserSignupAndLoginResponse> => {
  try {
    const user: AxiosResponse<UserSignupAndLoginResponse> = await userAxiosInstance.post(
      "/login",
      userLoginData,
    );
    return user.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
