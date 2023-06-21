import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const categorieSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload === 'Under Construction') {
        return 'Under Construction';
      }
      return state;
    },
  },
});

export const { checkStatus } = categorieSlice.actions;
export default categorieSlice.reducer;
