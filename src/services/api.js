import axios from "axios";

export const api = new axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Authorization: localStorage.getItem("@Auth:token"),
  },
});
