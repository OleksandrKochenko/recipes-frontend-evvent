import { initialState } from './initial-state';

export const handlePending = state => {
  state.isLoading = true;
};

export const handlePendingRefresh = state => {
  state.isRefreshing = true;
};

export const handleReject = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.isRefreshing = false;
};

export const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
  state.isLoading = false;
};

export const handleRegisterFulfilled = (state, { payload }) => {
  state.user.email = payload.email;
  state.error = null;
  state.isLoading = false;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleLogoutFulfilled = state => {
  state.user = initialState.user;
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = false;
};
