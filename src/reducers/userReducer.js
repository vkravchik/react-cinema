import { GET_USER_LIST, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/userConstants";
import { REQUEST_ERROR, REQUEST_PENDING, STORAGE_USER_KEY } from "../constants/dataConstants";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {

  if (action.type === REGISTER_USER) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: null
    }
  }

  if (action.type === LOGIN_USER) {
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(action.payload));
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: null,
      isLoggedIn: true
    }
  }

  if (action.type === LOGOUT_USER) {
    localStorage.removeItem(STORAGE_USER_KEY);
    return {
      ...state,
      isLoading: false,
      data: [],
      error: null,
      isLoggedIn: false
    }
  }

  if (action.type === GET_USER_LIST) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
      error: null
    }
  }

  if (action.type === REQUEST_PENDING) {
    return {
      ...state,
      isLoading: true
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
