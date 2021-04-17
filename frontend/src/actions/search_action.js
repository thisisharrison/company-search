export const FILTER_FAVORITES = "FILTER_FAVORITES";
export const UNFILTER_FAVORITES = "UNFILTER_FAVORITES";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";

export const filterFavorites = () => ({
  type: FILTER_FAVORITES,
});

export const unfilterFavorites = () => ({
  type: UNFILTER_FAVORITES,
});

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  query,
});
