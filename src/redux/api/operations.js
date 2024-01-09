import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'api/categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'api/recipes',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes', {
        params: { ...params },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFavorite = createAsyncThunk(
  'api/favorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/recipes/favorites/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'api/allFavorites',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/favorites');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMyRecipes = createAsyncThunk(
  'api/myRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/recipes/my');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'api/recipeById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/recipes/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
