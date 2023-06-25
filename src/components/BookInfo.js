import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/bookInfo.module.css';

const BookInfo = ({ category, name, author }) => (
  <>
    <div id={styles.category}>{category}</div>
    <div id={styles.name}>{name}</div>
    <div id={styles.author}>{author}</div>
  </>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookInfo;
