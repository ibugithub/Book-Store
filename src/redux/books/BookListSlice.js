import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [],
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },

    removeBook: (state, action) => {
      const Id = action.payload;
      state.book = state.book.filter((book) => book.id !== Id);
    },
  },
});

export const { addBook, removeBook, incrementByAmout } = bookSlice.actions;
export default bookSlice.reducer;
