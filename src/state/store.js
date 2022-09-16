import { configureStore } from '@reduxjs/toolkit';
import str_modReducer from './str_modSlice';

export default configureStore({
  reducer: {
    str_mod: str_modReducer,
  },
});
