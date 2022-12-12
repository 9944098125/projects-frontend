import { UPDATE_FAIL, UPDATE_START, UPDATE_SUCCESS } from "../Actions/Types";

const initialState = {
  updatedProject: {},
  loading: false,
  error: "",
};

export default function updateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedProject: payload.project,
      };
    case UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
