import {
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_CURRENT_USER,
} from "../actions/session_action";

// mock data
const initialState = {
  isAuthenticated: false,
  user: {
    uid: 1,
    username: "harry",
  },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.key) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.user,
      };

    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };

    default:
      return state;
  }
};

export default sessionReducer;
