import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/bookInfo.module.css';

const BookInfo = ({ category, name, author }) => (
  <>
    <div className={styles.fontRoboto} id={styles.category}>{category}</div>
    <div className={styles.fontRoboto} id={styles.name}>{name}</div>
    <div className={styles.fontRoboto} id={styles.author}>{author}</div>
  </>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookInfo;
