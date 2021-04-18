import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_REGISTER,
  RECEIVE_CONFIRM_NEW_PASSWORD,
  RESET_PASSWORD_SENT,
  RECEIVE_ACTIVATE_USER,
} from "../actions/session_action";
import { CLOSE_MESSAGE } from "../actions/ui_action";

const initialState = {
  message: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        message: "Welcome Back",
      };

    case RECEIVE_USER_REGISTER:
      return {
        message:
          "Thank you for registering. Check your email for Activation link.",
      };

    case RESET_PASSWORD_SENT:
      return {
        message: "Check your inbox for Reset Password link.",
      };

    case RECEIVE_CONFIRM_NEW_PASSWORD:
      return {
        message: "Password has been reset. Please try to login.",
      };

    case RECEIVE_ACTIVATE_USER:
      return {
        message: "Your account is activated. Please try to login.",
      };

    case RECEIVE_USER_LOGOUT:
      return {
        message: "Come back soon",
      };

    case CLOSE_MESSAGE:
      return {
        message: null,
      };

    default:
      return state;
  }
};

export default uiReducer;
