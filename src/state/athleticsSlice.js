import { createSlice } from '@reduxjs/toolkit';

export const athletics = createSlice({
  name: 'athletics',
  initialState: {
    visual: 'none',
    sources: ['proficiency', 'str_mod'],
    affecting: [],
  },
  reducers: {
    setVisual: (state, action) => {
      state.visual = action.payload;
    },
  },
});

export const { setVisual } = athletics.actions;

export default athletics.reducer;
