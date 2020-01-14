import jwt from 'jsonwebtoken'
import { registerUser, getUserList, loginUser } from "../services/userService";
import { GET_USER_LIST, LOGIN_USER, REGISTER_USER } from "../constants/userConstants";
import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from "../constants/dataConstants";

export const getUserListAction = () => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  getUserList()
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});
      dispatch({type: GET_USER_LIST, payload: res.data})
    })
    .catch(err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
};

export const registerUserAction = (user) => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  registerUser(user)
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});
      dispatch({type: REGISTER_USER, payload: res.data});
    })
    .catch(err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
};

export const loginUserAction = (user) => (dispatch) => {
  dispatch({type: REQUEST_PENDING});
  loginUser(user)
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});
      dispatch({type: LOGIN_USER, payload: jwt.decode(res.data)});
    })
    .catch(err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
};
