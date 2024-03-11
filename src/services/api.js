import axios from "axios";

export const api = new axios.create({
  baseURL: "https://api-nomaders.onrender.com/",
  headers: {
    Authorization: localStorage.getItem("@Auth:token"),
  },
});
