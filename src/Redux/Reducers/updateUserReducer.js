import {
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_START,
} from "../Actions/Types";

const initialState = {
  loading: false,
  updatedUser: {},
  failMessage: "",
};

export default function updateUserReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        updateUser: payload,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload,
      };
    default:
      return state;
  }
}
