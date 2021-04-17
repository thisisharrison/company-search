import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  RECEIVE_USERS_FAVORITES,
} from "../actions/favorite_action";
import { RECEIVE_USER_LOGOUT } from "../actions/session_action";

const initialState = {
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TO_FAVORITE:
      newState.favorites = [...newState.favorites, action.id];
      return newState;

    case REMOVE_FROM_FAVORITE:
      newState.favorites = newState.favorites.filter((id) => id !== action.id);
      return newState;

    case RECEIVE_USERS_FAVORITES:
      newState.favorites = action.ids;
      return newState;

    case RECEIVE_USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
