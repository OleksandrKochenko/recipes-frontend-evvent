export const handleReject = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleCategoriesFulfilled = (state, { payload }) => {
  state.categories = payload;
  state.error = null;
  state.isLoading = false;
};

export const handleRecipesFulilled = (state, { payload }) => {
  state.recipes = payload;
  state.error = null;
  state.isLoading = false;
};

export const handleFavoriteUpdateFulfilled = (state, { payload }) => {
  state.recipes.recipes = state.recipes.recipes.map(recipe => {
    if (recipe._id === payload._id) {
      return { ...payload };
    } else {
      return recipe;
    }
  });
  state.error = null;
  state.isLoading = false;
};
