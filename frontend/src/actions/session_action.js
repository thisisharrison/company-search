import * as API from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

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

export const receiveAuthErrors = (errors) => ({
  type: RECEIVE_AUTH_ERRORS,
  errors,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const loginUser = (data) => (dispatch) =>
  API.login(data)
    .then(({ data }) => {
      dispatch(loginSuccess(data));

      // Add username to token and we can skip currentUser API call
      const decoded = jwt_decode(data.access);
      console.log(decoded);

      API.currentUser(data).then((res) => {
        dispatch(receiveCurrentUser(res.data));
      });
    })
    .catch((err) => {
      dispatch(receiveAuthErrors(err));
      dispatch(loginFail());
    });

export const logout = () => (dispatch) => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  API.setAuthToken(false);
  dispatch(logoutUser());
};

export const registerUser = (data) => (dispatch) =>
  API.register(data).then((res) => {
    dispatch(receieveUserSignIn());
  });
