import axios from "axios";
import { SignupRequest } from "@appTypes/user";

const userAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/user`,
});

export const postRegisterNewUserService = async (
  newUserRequest: SignupRequest,
) => {
  try {
    await userAxiosInstance.post("/signup", newUserRequest);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
