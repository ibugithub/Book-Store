import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uid } from 'uuid';
import styles from '../css/addBook.module.css';
import { addBook } from '../redux/books/BookListSlice';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [Author, setAuthor] = useState('');
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
    const newBook = {
      itemId: uid(),
      category: selectedCatagory,
      title: bookTitle,
      author: Author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className={styles['addBook-container']} onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book title" value={bookTitle} onChange={handleTitleChange} />
      <input type="text" placeholder="Author" value={Author} onChange={handleAuthorChange} />
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

export default AddBook;
