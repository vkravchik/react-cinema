import axios from 'axios';
import { BASE_URL } from "../constants/dataConstants";

const collection = 'films';

export const getFilmList = async () => {
  return await axios.get(`${BASE_URL}/${collection}`);
};
