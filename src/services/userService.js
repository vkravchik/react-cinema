import axios from 'axios';

const baseUrl = `http://localhost:3002`;

export const getUser = async (user) => {
  return await axios.get('https://jsonplaceholder.typicode.com/users/' + user.id);
};

export const getUserList = async () => {
  return await axios.get(`${baseUrl}/user`);
};

export const addUser = async (user) => {
  return await axios.post(`${baseUrl}/user`, user);
};
