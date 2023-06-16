import React from 'react';
import PropTypes from 'prop-types';
import CommentRemoveEdit from './Comment_Remove_Edit';

const Book = ({
  type,
  name,
  author,
  progress,
  chapter,
}) => (
  <>
    <p>{type}</p>
    <h2>{name}</h2>
    <p>{author}</p>
    <CommentRemoveEdit />
    <div>{progress}</div>
    <p>{chapter}</p>
  </>
);

Book.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};
export default Book;
