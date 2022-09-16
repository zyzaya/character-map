import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState: {
    str_score: {
      visual: 'none',
      sources: [],
      affecting: ['str_mod'],
    },
    str_mod: {
      visual: 'none',
      sources: ['str_score'],
      affecting: ['athletics'],
    },
    athletics: {
      visual: 'none',
      source: ['str_mod', 'proficiency'],
      affecting: [],
    },
  },
  reducers: {
    setVisual: (state, action) => {
      state[action.payload.name] = action.payload.visual;
    },
  },
});

export const { setVisual } = statisticsSlice.actions;

export default statisticsSlice.reducer;
