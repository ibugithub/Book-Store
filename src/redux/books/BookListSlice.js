import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '0Holnirb1Tfzn6VYYwBg';

const getItems = () => JSON.parse(localStorage.getItem('progress'));
const getChapters = () => JSON.parse(localStorage.getItem('chapters'));
const syncWithProgress = (state) => {
  const progress = getItems();
  const chapters = getChapters();
  if (progress === null || chapters === null) {
    const { books } = state;
    books.forEach((book) => {
      let progressData = JSON.parse(localStorage.getItem('progress')) || {};
      let chapterData = JSON.parse(localStorage.getItem('chapters')) || {};
      progressData[book.item_id] = 5;
      chapterData[book.item_id] = 1;
      progressData = JSON.stringify(progressData);
      chapterData = JSON.stringify(chapterData);
      localStorage.setItem('progress', progressData);
      localStorage.setItem('chapters', chapterData);
    });
    state.progress = getItems();
    state.chapters = getChapters();
  }
};
const randomProgress = () => {
  const min = 5;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const initialState = {
  books: [],
  isLoading: false,
  error: null,
  progress: getItems(),
  chapters: getChapters(),
};
const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books', error);
  }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(`${baseUrl}/apps/${appId}/books`, book);
    if (response.data === 'Created') {
      let progData = JSON.parse(localStorage.getItem('progress')) || {};
      progData[book.item_id] = 5;
      progData = JSON.stringify(progData);
      localStorage.setItem('progress', progData);

      let chapterData = JSON.parse(localStorage.getItem('chapters')) || {};
      chapterData[book.item_id] = 1;
      chapterData = JSON.stringify(chapterData);
      localStorage.setItem('chapters', chapterData);

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

    let progData = JSON.parse(localStorage.getItem('progress')) || {};
    delete progData[itemId];
    progData = JSON.stringify(progData);
    localStorage.setItem('progress', progData);

    let chapterData = JSON.parse(localStorage.getItem('chapters')) || {};
    delete chapterData[itemId];
    chapterData = JSON.stringify(chapterData);
    localStorage.setItem('chapters', chapterData);

    return itemId;
  } catch (error) {
    throw Error('Failed to delete book', error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateProgress: (state, action) => {
      state.progress = getItems();
      state.progress[action.payload] += randomProgress();
      if (state.progress[action.payload] <= 360) {
        localStorage.setItem('progress', JSON.stringify(state.progress));
      }
    },

    updateChapter: (state, action) => {
      state.chapters = getChapters();
      state.chapters[action.payload] += 1;
      if (state.progress[action.payload] <= 360) {
        localStorage.setItem('chapters', JSON.stringify(state.chapters));
      }
    },
  },
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
        syncWithProgress(state);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
        state.progress = getItems();
        state.chapters = getChapters();
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
export { fetchBooks, addBook, deleteBook };
export const { updateProgress, updateChapter } = bookSlice.actions;
