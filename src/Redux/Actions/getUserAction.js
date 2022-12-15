import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_START } from "./Types";
import api from "../Api/Api";

export const getAUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_START,
    });
    const res = await api.get("/auth/getUser", userId);
    if (res) {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data.user,
      });
      // console.log("res", res);
    }
  } catch (err) {
    dispatch({
      type: GET_USER_FAIL,
      payload: err.response.data,
    });
    console.log(err);
  }
};
