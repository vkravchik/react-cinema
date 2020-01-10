import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import { userReducer } from "./userReducer";
import { dataReducer } from "./dataReducer";

export default combineReducers({
  form: formReducer,
  userReducer,
  dataReducer,
})
