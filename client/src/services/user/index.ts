import axios, { AxiosResponse } from "axios";
import { UserServiceResponse } from "@appTypes/user";

const userAxiosInstance = axios.create({
  baseURL: `${process.env.api as string}/api/v1/user`,
});

export const getUserService = async (
  userId: string,
): Promise<UserServiceResponse> => {
  try {
    const user: AxiosResponse<UserServiceResponse> = await userAxiosInstance.get(
      `/${userId}`,
    );
    return user.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
