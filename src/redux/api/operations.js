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
