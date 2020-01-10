import { GET_USER_LIST, REGISTER_USER } from "../constants/userConstants";
import { REQUEST_PENDING } from "../constants/dataConstants";

const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export const userReducer = (state = initialState, action) => {

  if (action.type === REQUEST_PENDING) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === GET_USER_LIST) {
    return {
      ...state,
      isLoading: false,
      data: action.payload
    }
  }

  if (action.type === REGISTER_USER) {
    return {
      ...state,
      isLoading: false,
      data: action.payload
    }
  }


  return state;
};
