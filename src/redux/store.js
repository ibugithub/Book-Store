import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/BookListSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    category: categoriesReducer,
  },
});

export default store;
