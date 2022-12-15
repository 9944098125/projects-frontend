import { DELETE_START, DELETE_SUCCESS, DELETE_FAIL } from "../Actions/Types";

const initialState = {
  response: "",
  error: "",
  loading: false,
};

export default function deleteReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        response: payload,
        loading: false,
      };
    case DELETE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
