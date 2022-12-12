import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const signInAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN_START,
    });
    const res = await api.post("/auth/sign_in", data);
    if (res) {
      console.log("res", res);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAIL,
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

//logout user
export const sign_out = (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
