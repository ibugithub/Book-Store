import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/BookListSlice';
import styles from '../css/Comment_Rem.module.css';

const CommentRemoveEdit = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <>
      <button className={styles.button} type="submit">Comment</button>
      <button className={styles.button} type="submit" onClick={() => handleClick(id)}>Remove</button>
      <button className={styles.button} type="submit">Edit</button>
    </>
  );
};

CommentRemoveEdit.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CommentRemoveEdit;
