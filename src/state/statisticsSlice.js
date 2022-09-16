import { createSlice } from '@reduxjs/toolkit';
import { Statistics } from '../info/Statistics';

export const statisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState: Statistics,
  reducers: {
    setVisual: (state, action) => {
      if (state[action.payload.name] !== undefined)
        state[action.payload.name].visual = action.payload.visual;
    },
  },
});

export const { setVisual } = statisticsSlice.actions;

export default statisticsSlice.reducer;
