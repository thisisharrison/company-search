export const selectAllCompanies = (entities) => {
  return Object.keys(entities.all).map((id) => entities.all[id]);
};

export const filterFavorite = (entities) => {
  return;
};
