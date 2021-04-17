export const FILTER_FAVORITES = "FILTER_FAVORITES";
export const UNFILTER_FAVORITES = "UNFILTER_FAVORITES";

export const filterFavorites = () => ({
  type: FILTER_FAVORITES,
});

export const unfilterFavorites = () => ({
  type: UNFILTER_FAVORITES,
});
