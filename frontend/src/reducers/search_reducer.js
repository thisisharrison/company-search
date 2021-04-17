import { FILTER_FAVORITES, UNFILTER_FAVORITES } from "../actions/search_action";

const initialState = {
  query: [],
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

    default:
      return state;
  }
};

export default searchReducer;
