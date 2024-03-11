import axios from "axios";

export const getToken = () =>
  localStorage.getItem("@Auth:token")
    ? localStorage.getItem("@Auth:token")
    : null;

export const getAuthorizationHeader = () => `${getToken()}`;

export const api = new axios.create({
  baseURL: "https://api-nomaders.onrender.com/",
  headers: {
    Authorization: getAuthorizationHeader(),
  },
});
