import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  form: formReducer,
  userReducer,
  authReducer,
})
