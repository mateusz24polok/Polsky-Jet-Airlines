import axios, { AxiosError } from "axios";
import { routesPaths } from "@resources/res.routesPaths";

export const createAxiosApiInstance = (pathname: string) => {
  const axiosApiInstance = axios.create({
    baseURL: `${process.env.api as string}${pathname}`,
  });

  axiosApiInstance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      let status;
      if (error.response) {
        status = error.response.status;
      }
      if (status === 401) {
        window.location.replace(`#${routesPaths.nonAuthorized}`);
      }
      return Promise.reject(error);
    },
  );

  return axiosApiInstance;
};
