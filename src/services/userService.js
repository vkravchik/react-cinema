import axios from 'axios';

const baseUrl = `http://localhost:3002`;
const collection = `users`;

// export const getUser = async (user) => {
//   return await axios.get('https://jsonplaceholder.typicode.com/users/' + user.id);
// };

export const getUserList = async () => {
  return await axios.get(`${baseUrl}/${collection}`);
};

export const registerUser = async (user) => {
  return await axios.post(`${baseUrl}/register`, user);
};

export const loginUser = async (user) => {
  return await axios.post(`${baseUrl}/login`, user);
};
