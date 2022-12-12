import {
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
} from "../Actions/Types";

const initialState = {
  successMessage: "",
  failMessage: "",
  loading: false,
};

export default function createReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROJECT_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: payload.message,
      };
    case CREATE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        failMessage: payload.error,
      };
    default:
      return state;
  }
}
