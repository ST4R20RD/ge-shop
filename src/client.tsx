import axios from "axios";

export const client = axios.create({
  baseURL: `https://fakestoreapi.com/`,
  /* withCredentials: true, */
});
