import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const resetPasswordAction = (body) => async (dispatch) => {
  try {
    dispatch({
      type: RESET_PASSWORD_START,
    });
    const res = await api.post("/auth/reset_password", body);
    if (res) {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: res.data,
      });
      console.log("reset password res", res);
      dispatch(alertActions.success(res.data.message));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    console.log("reset password error", err);
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: err.response.data.error,
    });
    dispatch(alertActions.error("Posted the Project successfully..."));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
