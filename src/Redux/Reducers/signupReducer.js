import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from "../Actions/Types";

const initialState = {
  signupFailMessage: "",
  loading: false,
};

export default function signup(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
    case SIGN_UP_FAIL:
      return {
        ...state,
        ...payload,
        loginFailMessage: payload,
        loading: false,
      };
    default:
      return state;
  }
}
