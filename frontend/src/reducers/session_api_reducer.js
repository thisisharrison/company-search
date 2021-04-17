import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  AUTH_SUCCESS,
  AUTH_FAIL,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_CONFIRM_NEW_PASSWORD,
} from "../actions/session_action";

// mock data
const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  user: undefined,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: undefined,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: undefined,
      };

    default:
      return state;
  }
};

export default sessionReducer;
