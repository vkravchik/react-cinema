import { GET_FILM_LIST } from "../constants/filmConstants";

const initialState = {
  data: [],
};

export const filmReducer = (state = initialState, action) => {

  if (action.type === GET_FILM_LIST) {
    return {
      ...state,
      data: action.payload
    }
  }

  return state;
};
