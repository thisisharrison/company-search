export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addFavorite = (id) => ({
  type: ADD_TO_FAVORITE,
  id,
});

export const removeFavorite = (id) => ({
  type: REMOVE_FROM_FAVORITE,
  id,
});
