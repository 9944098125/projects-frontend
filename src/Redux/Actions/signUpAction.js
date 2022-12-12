import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const signUpAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_UP_START,
    });
    const res = await api.post("/auth/sign_up", data);
    if (res) {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });
      console.log("signup res", res);
      dispatch(alertActions.success("Successfully Registered your account"));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    console.log("sign up error", err);
    dispatch({
      type: SIGN_UP_FAIL,
      payload: err.response.data.error,
    });
    dispatch(alertActions.error(err.response.data.error));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};
