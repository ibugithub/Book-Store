import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updateProgress, updateChapter } from '../redux/books/BookListSlice';
import styles from '../css/chapter.module.css';

const Chapter = ({ id }) => {
  const dispatch = useDispatch();
  const chapter = useSelector((state) => state.books.chapters[id]);
  const handleClick = () => {
    dispatch(updateProgress(id));
    dispatch(updateChapter(id));
  };
  return (
    <div id={styles.chapterContainer}>
      <div id={styles.divider} />
      <div id={styles.chapterInfoContainer}>
        <div id={styles.currentChapter}>Current Chapter</div>
        <div id={styles.chapter}>
          Chapter
          {chapter}
        </div>
        <button id={styles.updateButton} type="button" onClick={handleClick}> UPDATE PROGRESS </button>
      </div>

    </div>
  );
};

Chapter.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Chapter;
