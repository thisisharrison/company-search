import * as API from "../util/company_api_util";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const RECEIVE_USERS_FAVORITES = "RECEIVE_USERS_FAVORITES";

export const addFavorite = (id) => ({
  type: ADD_TO_FAVORITE,
  id,
});

export const removeFromFavorite = (id) => ({
  type: REMOVE_FROM_FAVORITE,
  id,
});

export const receiveUsersFavorites = (ids) => ({
  type: RECEIVE_USERS_FAVORITES,
  ids,
});

export const postFavorite = (id) => (dispatch) =>
  API.addFavorite(id)
    .then((res) => dispatch(addFavorite(res.data.id)))
    .catch((err) => console.error(err));

export const removeFavorite = (id) => (dispatch) =>
  API.removeFavorite(id)
    .then((res) => dispatch(removeFromFavorite(res.data.id)))
    .catch((err) => console.error(err));

export const fetchUserFavorites = () => (dispatch) =>
  API.currentUserFavorites()
    .then((res) => dispatch(receiveUsersFavorites(res.data)))
    .catch((err) => console.error(err));
