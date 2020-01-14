import axios from 'axios';
import { BASE_URL } from "../constants/dataConstants";

export const registerUser = async (user) => {
  return await axios.post(`${BASE_URL}/register`, user);
};

export const loginUser = async (user) => {
  return await axios.post(`${BASE_URL}/login`, user);
};
