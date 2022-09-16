import { configureStore } from '@reduxjs/toolkit';
import statisticsReducer from './statisticsSlice';

// visual = 'none' / 'focused' / 'affected' / 'sourced'
export default configureStore({
  reducer: {
    statistics: statisticsReducer,
  },
});
