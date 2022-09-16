import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState: {
    strength_score: {
      visual: 'none',
      sources: [],
      affecting: ['strength_modifier'],
    },
    strength_modifier: {
      visual: 'none',
      sources: ['strength_score'],
      affecting: ['strength_save', 'athletics'],
    },
    strength_save: {
      visual: 'none',
      sources: ['strength_modifier', 'proficiency'],
      affecting: [],
    },
    athletics: {
      visual: 'none',
      sources: ['strength_modifier', 'proficiency'],
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
