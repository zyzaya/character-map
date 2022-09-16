import { createSlice } from '@reduxjs/toolkit';

export const str_modSlice = createSlice({
  name: 'str_mod',
  initialState: {
    visual: 'none',
    sources: ['str_score'],
    affecting: ['athletics'],
  },
  reducers: {
    setVisual: (state, action) => {
      state.visual = action.payload;
    },
  },
});

export const { setVisual } = str_modSlice.actions;

export default str_modSlice.reducer;
