import { AxiosResponse } from "axios";
import { store } from "@store/setupStore";
import { getAuthorizationHeader } from "@utils/authUtils";
import { UserServiceResponse } from "@appTypes/user";
import { createAxiosApiInstance } from "../genericApiInstance";

const userAxiosInstance = createAxiosApiInstance("/api/v1/user");

export const getUserService = async (
  userId: string,
): Promise<UserServiceResponse> => {
  try {
    const user: AxiosResponse<UserServiceResponse> = await userAxiosInstance.get(
      `/${userId}`,
      {
        headers: {
          ...getAuthorizationHeader(store.getState().user.jwtToken),
        },
      },
    );
    return user.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
