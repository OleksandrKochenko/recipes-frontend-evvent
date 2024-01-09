export const handleReject = (state, { payload }) => {
  state.error = payload;
};

export const handleCategoriesFulfilled = (state, { payload }) => {
  state.categories = payload;
  state.error = null;
};

export const handleRecipesFulilled = (state, { payload }) => {
  state.recipes = payload;
  state.error = null;
};
