import axios from "axios";

// { username, email, password }
export const register = (data) => axios.post("/auth/users/", data);

// { uid, token }
export const activateUser = (data) =>
  axios.post("/auth/users/activation/", data);

// { username, password }
export const login = (data) => axios.post("/auth/jwt/create/", data);

// { email }
export const resetPassword = (data) =>
  axios.post("auth/users/reset_password/", data);

// { uid, token, new_password, re_new_password }
export const resetPasswordConfirm = (data) =>
  axios.post("/auth/users/reset_password_confirm/", data);

// Set headers with the access token
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// get current user
export const currentUser = ({ access }) => {
  if (access) {
    const config = {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    };
    // axios.defaults.headers.common["Authorization"] = `JWT ${access}`;
    return axios.get("/auth/users/me/", config);
  }
};

export const checkAuthentication = (data) =>
  axios.post("/auth/jwt/verify", data);
