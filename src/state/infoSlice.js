import { createSlice } from '@reduxjs/toolkit';

export const infoSlice = createSlice({
  name: 'infoSlice',
  initialState: { visible: false, value: '' },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setVisible: (state, action) => {
      state.visiable = action.payload;
    },
  },
});

export const { setValue, setVisible } = infoSlice.actions;

export default infoSlice.reducer;
