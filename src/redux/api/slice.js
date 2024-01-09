import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { fetchCategories, fetchRecipes } from './operations';
import {
  handleCategoriesFulfilled,
  handleRecipesFulilled,
  handleReject,
} from './actions';

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, handleCategoriesFulfilled)
      .addCase(fetchCategories.rejected, handleReject)
      .addCase(fetchRecipes.fulfilled, handleRecipesFulilled)
      .addCase(fetchRecipes.rejected, handleReject);
  },
});

export const apiReducer = apiSlice.reducer;
