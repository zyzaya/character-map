import { configureStore } from '@reduxjs/toolkit';
import statisticsReducer from './statisticsSlice';
import infoReducer from './infoSlice';

// visual = 'none' / 'focused' / 'affected' / 'sourced'
export default configureStore({
  reducer: {
    statistics: statisticsReducer,
    info: infoReducer,
  },
});
