import {
  FILTER_FAVORITES,
  UNFILTER_FAVORITES,
  UPDATE_SEARCH_QUERY,
} from "../actions/search_action";
import { RECEIVE_USER_LOGOUT } from "../actions/session_action";

const initialState = {
  query: "",
  favoriteFilter: false,
};

const searchReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case FILTER_FAVORITES:
      newState.favoriteFilter = true;
      return newState;

    case UNFILTER_FAVORITES:
      newState.favoriteFilter = false;
      return newState;

    case UPDATE_SEARCH_QUERY:
      newState.query = action.query;
      return newState;

    case RECEIVE_USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default searchReducer;
