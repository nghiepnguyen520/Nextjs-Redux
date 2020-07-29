import * as types from "../types";
import actions from "redux-form/lib/actions";
const initalState = {
  posts: [],
  loadings: false,
  error: null,
};

export const postReducer = (state = initalState, action) => {
  switch (actions.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
