import jwt from 'jsonwebtoken'
import { loginUser, registerUser } from "../services/authService";
import { LOGIN_USER, REGISTER_USER } from "../constants/userConstants";
import { JWT_KEY, REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS, USER_KEY } from "../constants/dataConstants";

export const registerUserAction = (user) => (dispatch) => {
  dispatch({type: REQUEST_PENDING});

  registerUser(user)
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});
      dispatch({type: REGISTER_USER, payload: res.data});
    }, err => {
      dispatch({type: REQUEST_ERROR, payload: err});
    })
};

export const loginUserAction = (user) => (dispatch) => {
  dispatch({type: REQUEST_PENDING});

  loginUser(user)
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});

      localStorage.setItem(JWT_KEY, res.data);
      localStorage.setItem(USER_KEY, JSON.stringify(jwt.decode(res.data)));

      dispatch({type: LOGIN_USER, payload: jwt.decode(res.data)});
    }, err => {
      dispatch({type: REQUEST_ERROR, payload: err});
    })
};
