import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/BookListSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
