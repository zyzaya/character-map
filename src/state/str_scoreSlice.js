import { createSlice } from '@reduxjs/toolkit';

export const str_scoreSlice = createSlice({
  name: 'str_score',
  initialState: {
    visual: 'none',
    sources: [],
    affecting: ['str_mod'],
  },
  reducers: {
    setVisual: (state, action) => {
      state.visual = action.payload;
    },
  },
});

export const { setVisual } = str_scoreSlice.actions;

export default str_scoreSlice.reducer;
