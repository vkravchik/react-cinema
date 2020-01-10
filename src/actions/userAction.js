import { addUser, getUserList } from "../services/userService";
import { GET_USER_LIST, REGISTER_USER } from "../constants/userConstants";
import { REQUEST_PENDING } from "../constants/dataConstants";

export const getUsersAction = () => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  getUserList()
    .then(res => {
      dispatch({type: GET_USER_LIST, payload: res.data})
    });
};

export const addUserAction = (user) => (dispatch) => {
  addUser(user)
    .then(res => {
      dispatch({type: REGISTER_USER, payload: res.data});
    })
};
