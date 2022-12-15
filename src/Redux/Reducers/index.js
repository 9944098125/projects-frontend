import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import auth from "./signInReducer";
import signup from "./signupReducer";
import createReducer from "./createProject";
import getReducer from "./getProjects";
import updateReducer from "./updateReducer";
import resetReducer from "./resetPasswordReducer";
import getUserReducer from "./getUserReducer";
import updateUserReducer from "./updateUserReducer";
import deleteReducer from "./deleteReducer";

export default combineReducers({
  alert,
  auth,
  signup,
  createReducer,
  getReducer,
  updateReducer,
  resetReducer,
  getUserReducer,
  updateUserReducer,
  deleteReducer,
});
