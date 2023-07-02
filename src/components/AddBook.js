/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uid } from 'uuid';
import styles from '../css/addBook.module.css';
import { addBook } from '../redux/books/BookListSlice';

const AddBook = ({ setBookList }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedCatagory, setSelectedCatagory] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setBookTitle(event.target.value);
  };
  const handleCatagoryChange = (event) => {
    setSelectedCatagory(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({ title: bookTitle, catagory: selectedCatagory }));
    const newBook = {
      Id: uid(),
      Type: selectedCatagory,
      Name: bookTitle,
      Author: author,
      Chapter: 'Chapter 1',
      Progress: '0%',
    };
    setBookList((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <form className={styles['addBook-container']} onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book title" value={bookTitle} onChange={handleTitleChange} />
      <input type="text" placeholder="Author" value={author} onChange={handleAuthorChange} />
      <select id="category" value={selectedCatagory} onChange={handleCatagoryChange}>
        <option value="" disabled>Catagory</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Mystery">Mystery</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

AddBook.propTypes = {
  setBookList: PropTypes.func.isRequired,
};
export default AddBook;
