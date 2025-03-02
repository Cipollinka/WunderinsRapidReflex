import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  completedLevels: [],
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    completeLevel: (state, action) => {
      if (!state.completedLevels.includes(action.payload)) {
        state.completedLevels.push(action.payload);
      }
    },
    resetLevels: (state) => {
      state.completedLevels = [];
    },
  },
});

export const { completeLevel, resetLevels } = levelsSlice.actions;

export const selectCompletedLevels = (state) => state.levels.completedLevels;

export default levelsSlice.reducer;
