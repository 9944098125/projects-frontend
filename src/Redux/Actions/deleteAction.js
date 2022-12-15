import api from "../Api/Api";
import { alertActions } from "./alertActions";
import { DELETE_START, DELETE_FAIL, DELETE_SUCCESS } from "./Types";

export const deleteProjectAction = (projectId) => async (dispatch) => {
  dispatch({
    type: DELETE_START,
  });
  try {
    const res = await api.delete("/projects/delete/" + projectId);
    if (res) {
      // console.log('delete response: ', res);
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data && res.data.message,
      });
      dispatch(alertActions.success("Deleted the Project successfully"));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
      // window.location.reload();
    }
  } catch (err) {
    console.log("delete error: ", err);
    dispatch({
      type: DELETE_FAIL,
      payload: err.response.message,
    });
    dispatch(alertActions.error("Something went wrong..."));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
