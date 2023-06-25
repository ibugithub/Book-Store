/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import CommentRemoveEdit from './Comment_Remove_Edit';
import ProgressBar from './doghnutProgress';
import Chapter from './Chapters';
import BookInfo from './BookInfo';
import styles from '../css/book.module.css';

const Book = ({
  id,
  name,
  author,
  category,
}) => (
  <>
    <div id={styles.bookInfoContainer}>
      <BookInfo category={category} name={name} author={author} />
      <CommentRemoveEdit id={id} />
    </div>
    <ProgressBar id={id} />
    <Chapter id={id} />
  </>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
