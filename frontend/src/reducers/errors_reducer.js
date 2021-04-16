import { RECEIVE_AUTH_ERRORS } from "../actions/session_action";

const initialState = {
  session: [],
  search: [],
};

const errorReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.key) {
    case RECEIVE_AUTH_ERRORS:
      newState.session = action.errors;
      return newState;

    default:
      return state;
  }
};

export default errorReducer;
