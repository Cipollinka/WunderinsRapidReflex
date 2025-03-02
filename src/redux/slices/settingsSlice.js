import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMusicOn: true,
  isVibrationOn: true,
  isAlertOn: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleMusic: (state) => {
      state.isMusicOn = !state.isMusicOn;
    },
    toggleVibration: (state) => {
      state.isVibrationOn = !state.isVibrationOn;
    },
    toggleAlert: (state) => {
      state.isAlertOn = !state.isAlertOn;
    },
  },
});

export const { toggleMusic, toggleVibration, toggleAlert} = settingsSlice.actions;
export default settingsSlice.reducer;
