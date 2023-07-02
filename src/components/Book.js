import React from 'react';
import PropTypes from 'prop-types';
import CommentRemoveEdit from './Comment_Remove_Edit';

const Book = ({
  id,
  name,
  author,
  category,
}) => (
  <>
    <h2>{name}</h2>
    <p>{author}</p>
    <CommentRemoveEdit id={id} />
    <div>{category}</div>
  </>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
