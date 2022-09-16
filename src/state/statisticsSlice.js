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
      sources: ['str_mod', 'proficiency'],
      affecting: [],
    },
  },
  reducers: {
    setVisual: (state, action) => {
      if (state[action.payload.name] !== undefined)
        state[action.payload.name].visual = action.payload.visual;
    },
  },
});

export const { setVisual } = statisticsSlice.actions;

export default statisticsSlice.reducer;
