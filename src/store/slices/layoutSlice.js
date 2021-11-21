import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: true,
  footer: true
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDisplayLayout: (state, action) => {
      state.footer = !!action.payload.footer;
      state.header = !!action.payload.header;
    }
  }
});

export const { setDisplayLayout } = layoutSlice.actions;

export const selectDisplayLayout = state => state.layout;

export default layoutSlice.reducer;
