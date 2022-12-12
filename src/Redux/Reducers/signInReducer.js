import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} from "../Actions/Types";
// import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loading: false,
  signInFailMessage: "",
  user: {},
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      //   const decodedToken = jwtDecode(payload);
      //   const id = decodedToken.id;
      localStorage.setItem("isActivated", true);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("userId", payload._id);
      localStorage.setItem("loggedInUser", JSON.stringify(payload));
      localStorage.setItem("image", JSON.stringify(payload.image));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        token: payload.token,
        user: payload,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        ...payload,
        signInFailMessage: payload,
      };
    case SIGN_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("isActivated");
      localStorage.removeItem("userId");
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("image");
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
