import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { fetchCategories, fetchRecipes, updateFavorite } from './operations';
import {
  handleCategoriesFulfilled,
  handleFavoriteUpdateFulfilled,
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
      .addCase(updateFavorite.rejected, handleReject);
  },
});

export const apiReducer = apiSlice.reducer;
