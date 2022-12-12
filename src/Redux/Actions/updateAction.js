import { UPDATE_START, UPDATE_SUCCESS, UPDATE_FAIL } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const updateAction = (projectId, body) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_START,
    });
    const res = await api.put(`/projects/update/${projectId}`, body);
    if (res) {
      console.log("update res", res);
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
      dispatch(alertActions.success("Updated the Project successfully..."));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    console.log("update error", err);
    dispatch({
      type: UPDATE_FAIL,
      payload: err.response.data.error,
    });
    dispatch(alertActions.error("Couldn't update the project"));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
