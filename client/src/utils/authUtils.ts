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
