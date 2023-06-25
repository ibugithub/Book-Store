import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../css/bookList.module.css';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/BookListSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookList = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <ul className={styles.bookContainer}>
        { bookList.map((book) => (
          <li key={book.item_id}>
            <Book
              id={book.item_id}
              name={book.title}
              author={book.author}
              category={book.category}
            />
          </li>
        ))}
      </ul>
      <div id={styles.sepContainer}>
        <div id={styles.separator}> </div>
      </div>

      <AddBook />
    </>

  );
};

export default BookList;
