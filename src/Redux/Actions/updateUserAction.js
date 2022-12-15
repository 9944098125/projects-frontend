import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const updateUserAction = (userId, data) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_START,
    });
    const res = await api.put(`/auth/updateUser/${userId}`, data);
    if (res) {
      // console.log("res", res);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data.user,
      });
      dispatch(alertActions.success(res.data.message));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.response.data,
    });
    dispatch(alertActions.error(err.response.data.toString()));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
    console.log("login error", err);
  }
};
