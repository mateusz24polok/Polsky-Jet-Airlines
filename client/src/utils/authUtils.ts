import jwt_decode from "jwt-decode";
import { Jwt } from "@appTypes/shared/jwt";

export const setJwtInLocalStorage = (jwt: string): void => {
  if (window.localStorage) {
    localStorage.setItem("jwt", jwt);
  }
};

export const getJwtFromLocalStorage = (): string => {
  return localStorage && localStorage.getItem("jwt")
    ? localStorage.getItem("jwt") || ""
    : "";
};

export const removeJwtFromLocalStorage = (): void => {
  if (window.localStorage && localStorage.getItem("jwt")) {
    localStorage.removeItem("jwt");
  }
};

export const getUserIdFromJwt = (jwt: string): string | null => {
  if (jwt && jwt !== "") {
    const decodedToken = jwt_decode<Jwt>(jwt);
    return decodedToken.id;
  }
  return null;
};

export const getTokenValidity = (jwt: string) => {
  if (jwt && jwt !== "") {
    const decodedToken = jwt_decode<Jwt>(jwt);
    const tokenExpirationDate = decodedToken.exp;
    return Boolean(
      tokenExpirationDate && tokenExpirationDate * 1000 > new Date().getTime(),
    );
  }
  return false;
};
