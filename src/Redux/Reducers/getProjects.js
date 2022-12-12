import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_START,
} from "../Actions/Types";

const initialState = {
  projects: [],
  loading: false,
};

export default function getReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROJECTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    case GET_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
