import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
};

export default function resetReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RESET_PASSWORD_START:
      return {
        loading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
      };
    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
}
