import { createSlice } from '@reduxjs/toolkit';
import { Classes } from '../info/Classes';
import { Statistics } from '../info/Statistics';

export const statisticsSlice = createSlice({
  name: 'statisticsSlice',
  initialState: Statistics,
  reducers: {
    setVisual: (state, action) => {
      if (state[action.payload.name] !== undefined)
        state[action.payload.name].visual = action.payload.visual;
    },
    setSpellAbility: (state, action) => {
      let sources = ['proficiency', 'character_class'];
      if (Classes[action.payload].spell_modifier !== '') {
        sources.push(`${Classes[action.payload].spell_modifier}_modifier`);
        state['spell_attack'].sources = sources;
        state['spell_save'].sources = sources;
      }
    },
  },
});

export const { setVisual, setSpellAbility } = statisticsSlice.actions;

export default statisticsSlice.reducer;
