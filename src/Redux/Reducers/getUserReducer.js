import {
  GET_USER_FAIL,
  GET_USER_START,
  GET_USER_SUCCESS,
} from "../Actions/Types";

const initialState = {
  user: {},
  failMessage: "",
  loading: false,
};

export default function getUserReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    default:
      return state;
  }
}
