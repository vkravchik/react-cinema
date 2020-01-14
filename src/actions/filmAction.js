import { REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCESS } from "../constants/dataConstants";
import { GET_FILM_LIST } from "../constants/filmConstants";
import { getFilmList } from "../services/filmService";

export const getFilmListAction = () => (dispatch) => {
  dispatch({type: REQUEST_PENDING});

  getFilmList().then(res => {
    dispatch({type: REQUEST_SUCCESS});
    dispatch({type: GET_FILM_LIST, payload: res.data});
  }, err => {
    dispatch({type: REQUEST_ERROR, payload: err});
  })
};
