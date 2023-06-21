/* eslint-disable no-unused-vars */
import { React } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css/bookList.module.css';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const bookList = useSelector((state) => state.books.books);
  return (
    <>
      <ul className={styles.bookContainer}>
        {bookList.map((book) => (
          <li key={book.itemId}>
            <Book
              id={book.itemId}
              name={book.title}
              author={book.author}
              category={book.category}

            />
          </li>
        ))}
      </ul>
      <AddBook />
    </>

  );
};

export default BookList;
