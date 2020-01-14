import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/userConstants";
import { JWT_KEY, REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS, USER_KEY } from "../constants/dataConstants";

const getStorageItem = (key) => (
  localStorage.getItem(key)
);

const initialState = {
  isLoading: false,
  token: getStorageItem(JWT_KEY) ? getStorageItem(JWT_KEY) : null,
  user: getStorageItem(USER_KEY) ? JSON.parse(getStorageItem(USER_KEY)) : {},
  error: null,
  isLoggedIn: !!getStorageItem(JWT_KEY) && !!getStorageItem(USER_KEY),
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
