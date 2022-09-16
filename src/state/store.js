import { configureStore } from '@reduxjs/toolkit';
import str_modReducer from './str_modSlice';
import athleticsReducer from './athleticsSlice';

export default configureStore({
  reducer: {
    str_mod: str_modReducer,
    athletics: athleticsReducer,
  },
});
