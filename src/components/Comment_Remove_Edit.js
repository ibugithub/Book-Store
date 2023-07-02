/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/BookListSlice';

const CommentRemoveEdit = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <>
      <button type="submit">Comment</button>
      <button type="submit" onClick={() => handleClick(id)}>Remove</button>
      <button type="submit">Edit</button>
    </>
  );
};

CommentRemoveEdit.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CommentRemoveEdit;
