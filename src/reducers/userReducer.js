import { GET_USER_LIST } from "../constants/userConstants";

const initialState = {
  data: [],
};

export const userReducer = (state = initialState, action) => {

  if (action.type === GET_USER_LIST) {
    return {
      ...state,
      data: action.payload
    }
  }

  return state;
};
