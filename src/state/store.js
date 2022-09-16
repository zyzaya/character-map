import { configureStore } from '@reduxjs/toolkit';
import str_scoreReducer from './str_scoreSlice';
import str_modReducer from './str_modSlice';
import athleticsReducer from './athleticsSlice';
import statisticsReducer from './statisticsSlice';

// visual = 'none' / 'focused' / 'affected' / 'sourced'
export default configureStore({
  reducer: {
    // str_score: str_scoreReducer,
    // str_mod: str_modReducer,
    // athletics: athleticsReducer,
    statistics: statisticsReducer,
  },
});
