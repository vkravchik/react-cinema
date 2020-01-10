import { IS_LOADING } from "../constants/dataConstants";

const initialState = {
  isLoading: false,
};

export const dataReducer = (state = initialState, action) => {
  if (action.type === IS_LOADING) {
    return Object.assign({}, state, {
      isLoading: action.payload
    })
  }

  return state;
};
