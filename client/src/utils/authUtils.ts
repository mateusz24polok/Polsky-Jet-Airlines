import jwt_decode from "jwt-decode";
import { Jwt } from "@appTypes/shared/jwt";
import { IUser } from "@appTypes/user";

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

export const setUserInLocalStorage = (userData: IUser) => {
  if (userData) {
    const { _id, email, name, purchases, role } = userData;
    const userDataJSON = JSON.stringify({
      id: _id,
      email,
      name,
      purchases,
      role,
    });
    if (window.localStorage) {
      localStorage.setItem("user", userDataJSON);
    }
  }
};

export const getUserFromLocalStorage = (jwt: string) => {
  if (getTokenValidity(jwt)) {
    return localStorage && localStorage.getItem("user")
      ? (JSON.parse(localStorage.getItem("user") as string) as IUser)
      : null;
  }
  return null;
};
