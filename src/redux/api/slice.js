import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import {
  fetchCategories,
  fetchFavorites,
  fetchMyRecipes,
  fetchRecipeById,
  fetchRecipes,
  updateFavorite,
} from './operations';
import {
  handleCategoriesFulfilled,
  handleFavoriteUpdateFulfilled,
  handleFetchRecipeById,
  handlePending,
  handleRecipesFulilled,
  handleReject,
} from './actions';

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, handleCategoriesFulfilled)
      .addCase(fetchCategories.rejected, handleReject)
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, handleRecipesFulilled)
      .addCase(fetchRecipes.rejected, handleReject)
      .addCase(updateFavorite.pending, handlePending)
      .addCase(updateFavorite.fulfilled, handleFavoriteUpdateFulfilled)
      .addCase(updateFavorite.rejected, handleReject)
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, handleRecipesFulilled)
      .addCase(fetchFavorites.rejected, handleReject)
      .addCase(fetchMyRecipes.pending, handlePending)
      .addCase(fetchMyRecipes.fulfilled, handleRecipesFulilled)
      .addCase(fetchMyRecipes.rejected, handleReject)
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, handleFetchRecipeById)
      .addCase(fetchRecipeById.rejected, handleReject);
  },
});

export const apiReducer = apiSlice.reducer;
