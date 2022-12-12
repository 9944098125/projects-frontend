import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const getAction = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROJECTS_START,
    });
    const res = await api.get(`/projects/getProjects/${userId}`);
    if (res) {
      // console.log("get response", res);
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: res.data.projects,
      });
    }
  } catch (err) {
    console.log("get error", err);
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload: err.response.data.error,
    });
    dispatch(alertActions.error(err.response.data.error));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
