import axios from 'axios';
import { BASE_URL } from "../constants/dataConstants";

const collection = `users`;

export const getUserList = async () => {
  return await axios.get(`${BASE_URL}/${collection}`);
};
