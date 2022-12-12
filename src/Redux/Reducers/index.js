import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import auth from "./signInReducer";
import signup from "./signupReducer";
import createReducer from "./createProject";
import getReducer from "./getProjects";

export default combineReducers({
  alert,
  auth,
  signup,
  createReducer,
  getReducer,
});