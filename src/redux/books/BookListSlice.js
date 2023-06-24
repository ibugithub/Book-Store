import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '0Holnirb1Tfzn6VYYwBg';

const initialState = {
  books: [], // Update the initial state for the books array
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data; // Ensure books is always an array
  } catch (error) {
    throw Error('Failed to fetch books', error);
  }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(`${baseUrl}/apps/${appId}/books`, book);
    if (response.data === 'Created') {
      return book;
    }
    throw Error('Failed to add book');
  } catch (error) {
    throw Error('Failed to add book', error);
  }
});

const deleteBook = createAsyncThunk('books/deleteBook', async (itemId) => {
  try {
    await axios.delete(`${baseUrl}/apps/${appId}/books/${itemId}`);
    return itemId;
  } catch (error) {
    throw Error('Failed to delete book', error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const allBooks = action.payload;
        const cleanedBooks = Object.keys(allBooks).map((itemId) => ({
          item_id: itemId,
          title: allBooks[itemId][0].title,
          author: allBooks[itemId][0].author,
          category: allBooks[itemId][0].category,
        }
        ));
        state.books = cleanedBooks;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
export { fetchBooks, addBook, deleteBook };
