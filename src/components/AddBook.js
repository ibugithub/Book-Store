import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import styles from '../css/addBook.module.css';
import { addBook } from '../redux/books/BookListSlice';

const AddBook = () => {
  const getRandomName = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };
  const [bookTitle, setBookTitle] = useState('');
  const [selectedCatagory, setSelectedCatagory] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setBookTitle(event.target.value);
  };
  const handleCatagoryChange = (event) => {
    setSelectedCatagory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: nanoid(),
      title: bookTitle,
      author: getRandomName(),
      category: selectedCatagory,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setSelectedCatagory('');
  };

  return (
    <form className={styles['addBook-container']} onSubmit={handleSubmit}>
      <h3 className={styles.color88}>ADD NEW BOOK</h3>
      <div id={styles.inputContainer}>
        <input id={styles.title} className={styles.input} type="text" placeholder="Book title" value={bookTitle} onChange={handleTitleChange} />
        <select
          id={styles.category}
          className={styles.input}
          value={selectedCatagory}
          onChange={handleCatagoryChange}
        >
          <option value="" disabled>Catagory</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Mystery">Mystery</option>
        </select>
        <button id={styles.button} className={styles.input} type="submit">ADD BOOK</button>
      </div>

    </form>
  );
};

export default AddBook;
