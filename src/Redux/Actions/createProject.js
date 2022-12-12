import {
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_START,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const createAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PROJECT_START,
    });
    const res = await api.post("/projects/createProject", data);
    if (res) {
      // console.log("create res", res);
      dispatch({
        type: CREATE_PROJECT_SUCCESS,
        payload: res.data,
      });
      dispatch(alertActions.success("Posted the Project successfully..."));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    console.log("err in create frontend", err);
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: err.response.data,
    });
    dispatch(alertActions.error(err.response.data.error));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
