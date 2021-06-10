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
    console.error(error);
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
    console.error(error);
    throw new Error(error);
  }
};

export const getLogoutUserService = async (): Promise<string> => {
  try {
    const logoutMessage: AxiosResponse<{
      status: string;
    }> = await userAxiosInstance.get("/logout");
    return logoutMessage.data.status;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
