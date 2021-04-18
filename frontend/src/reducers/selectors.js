export const selectAllCompanies = (entities) => {
  return Object.keys(entities.all).map((id) => entities.all[id]);
};

export const selectUserFavorite = (state) => {
  const favoriteIds = state.user.favorites;
  const companies = state.entities.all;
  return favoriteIds.map((id) => companies[id]);
};
