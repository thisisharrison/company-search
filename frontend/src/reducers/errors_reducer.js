import {
  RECEIVE_AUTH_ERRORS,
  LOGIN_SUCCESS,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  AUTH_SUCCESS,
  RECEIVE_USER_REGISTER,
  RECEIVE_CONFIRM_NEW_PASSWORD,
} from "../actions/session_action";

const initialState = {
  session: {},
  search: [],
};

const errorReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_AUTH_ERRORS:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      newState.session = action.errors;
      return newState;

    case LOGIN_SUCCESS:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER_LOGOUT:
    case AUTH_SUCCESS:
    case RECEIVE_USER_REGISTER:
    case RECEIVE_CONFIRM_NEW_PASSWORD:
      newState.session = {};
      return newState;

    default:
      return state;
  }
};

export default errorReducer;
