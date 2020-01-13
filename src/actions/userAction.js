import { registerUser, getUserList } from "../services/userService";
import { GET_USER_LIST, REGISTER_USER } from "../constants/userConstants";
import { REQUEST_PENDING, REQUEST_ERROR } from "../constants/dataConstants";

export const getUserListAction = () => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  getUserList()
    .then(res => {
      dispatch({type: GET_USER_LIST, payload: res.data})
    });
};

export const registerUserAction = (user) => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  registerUser(user)
    .then(res => {
      console.log(res);
      dispatch({type: REGISTER_USER, payload: res.data});
    })
    .catch(err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
};

export const loginUserAction = (user) => (dispatch) => {

};
