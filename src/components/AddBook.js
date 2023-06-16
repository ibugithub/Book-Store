import { React, useState } from 'react';
import styles from '../css/addBook.module.css';

const AddBook = () => {
  const [selectedCatagory, setSelectedCatagory] = useState('');
  const handleChange = (event) => {
    setSelectedCatagory(event.target.value);
  };
  return (
    <div className={styles['addBook-container']}>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book title" />
      <select id="category" value={selectedCatagory} onChange={handleChange}>
        <option value="" disabled>Catagory</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Mystery">Mystery</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </div>
  );
};

export default AddBook;
