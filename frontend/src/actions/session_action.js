import * as API from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const RESET_PASSWORD_SENT = "RESET_PASSWORD_SENT";
export const RECEIVE_CONFIRM_NEW_PASSWORD = "RECEIVE_CONFIRM_NEW_PASSWORD";
export const RECEIVE_ACTIVATE_USER = "RECEIVE_ACTIVATE_USER";

export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

export const receieveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN,
});

export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authFail = () => ({
  type: AUTH_FAIL,
});

export const receiveAuthErrors = (errors) => ({
  type: RECEIVE_AUTH_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const resetPasswordSent = () => ({
  type: RESET_PASSWORD_SENT,
});

export const receiveConfirmNewPassword = () => ({
  type: RECEIVE_CONFIRM_NEW_PASSWORD,
});

export const receiveActivateUser = () => ({
  type: RECEIVE_ACTIVATE_USER,
});

export const loginUser = (data) => (dispatch) =>
  API.login(data)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      localStorage.setItem("jwtToken", data.access);
      API.setAuthToken(data.access);
      const decoded = jwt_decode(data.access);
      delete decoded["jti"];
      delete decoded["token_type"];
      dispatch(receiveCurrentUser(decoded));
      return { status: "login_success" };
    })
    .catch((err) => dispatch(receiveAuthErrors(err.response.data)));

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  API.setAuthToken(false);
  dispatch(logoutUser());
};

export const registerUser = (data) => (dispatch) =>
  API.register(data)
    .then((res) => {
      dispatch(receieveUserSignIn());
      return { state: "register_user" };
    })
    .catch((err) => dispatch(receiveAuthErrors(err.response.data)));

export const confirmNewPassword = (data) => (dispatch) =>
  API.resetPasswordConfirm(data)
    .then((res) => {
      logout()(dispatch);
      return { status: "confirm_new_password" };
    })
    .catch((err) => dispatch(receiveAuthErrors(err.response.data)));

export const resetPassword = (data) => (dispatch) =>
  API.resetPassword(data)
    .then((res) => {
      dispatch(resetPasswordSent());
      return { status: "password_sent" };
    })
    .catch((err) => dispatch(receiveAuthErrors(err.response.data)));

export const activateUser = (data) => (dispatch) =>
  API.activateUser(data)
    .then((res) => {
      dispatch(receiveActivateUser());
      return { status: "activated_user" };
    })
    .catch((err) => dispatch(receiveAuthErrors(err.response.data)));
