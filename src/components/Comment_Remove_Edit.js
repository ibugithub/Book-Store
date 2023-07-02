import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/BookListSlice';

const CommentRemoveEdit = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeBook(id));
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
