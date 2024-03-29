import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { logIn, logOut, refreshUser, register } from './operations';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRegisterFulfilled,
  handleReject,
  handlePending,
  handlePendingRefresh,
  handleRefreshFulfilled,
} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleReject)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logIn.rejected, handleReject)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleReject)
      .addCase(logOut.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
