import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/userConstants";
import { JWT_KEY, REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "../constants/dataConstants";

const initialState = {
  isLoading: false,
  token: localStorage.getItem(JWT_KEY) ? localStorage.getItem(JWT_KEY) : null,
  user: {},
  error: null,
  isLoggedIn: !!localStorage.getItem(JWT_KEY),
};

export const authReducer = (state = initialState, action) => {

  if (action.type === REGISTER_USER) {
    return {
      ...state,
      isLoading: false,
      error: null
    }
  }

  if (action.type === LOGIN_USER) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      isLoggedIn: true,
      error: null
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      isLoading: false,
      user: {},
      token: null,
      isLoggedIn: false,
      error: null
    }
  }

  if (action.type === REQUEST_PENDING) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === REQUEST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === REQUEST_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
  }


  return state;
};
