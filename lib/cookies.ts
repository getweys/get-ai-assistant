import Cookies from "js-cookie";

import { Nullable } from "@/types/index";

const setCookie = (name: string, value: string): void => {
  Cookies.set(name, value, { secure: true });
};

const getCookie = (name: string): Nullable<string | undefined> => {
  return Cookies.get(name);
};

// Function to remove a cookie
const removeCookie = (name: string): void => {
  Cookies.remove(name);
};

export { getCookie, removeCookie, setCookie };
