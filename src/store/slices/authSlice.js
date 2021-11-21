import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export const { setAuthenticated, setCurrentUser } = authSlice.actions;

export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectCurrentUser = state => state.auth.currentUser;

export default authSlice.reducer;
