import React from 'react';
import { v4 as uid } from 'uuid';
import styles from '../css/bookList.module.css';
import Book from './Book';

const BookList = () => {
  const bookList = [
    {
      Id: uid(),
      Type: 'Action',
      Name: 'The Hunger Game',
      Author: 'Suzanne Collins',
      Chapter: 'Chapter 8',
      Progress: '64%',
    },

    {
      Id: uid(),
      Type: 'Science Fiction',
      Name: 'Dune',
      Author: 'Frank Herbert',
      Chapter: 'Chapter 17',
      Progress: '64%',
    },

    {
      Id: uid(),
      Type: 'Economy',
      Name: 'Capital in the Twenty-First Century',
      Author: 'Rozer Fedric',
      Chapter: 'Chapter 11',
      Progress: '64%',
    },

  ];
  return (
    <ul className={styles.bookContainer}>
      {bookList.map((book) => (
        <li key={book.Id}>
          <Book
            name={book.Name}
            type={book.Type}
            author={book.Author}
            chapter={book.Chapter}
            progress={book.Progress}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
