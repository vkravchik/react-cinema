import { getUserList } from "../services/userService";
import { GET_USER_LIST } from "../constants/userConstants";
import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "../constants/dataConstants";

export const getUserListAction = () => (dispatch) => {
  dispatch({type: REQUEST_PENDING});

  getUserList()
    .then(res => {
      dispatch({type: REQUEST_SUCCESS});
      dispatch({type: GET_USER_LIST, payload: res.data});
    }, err => {
      dispatch({type: REQUEST_ERROR, payload: err});
    })
};
