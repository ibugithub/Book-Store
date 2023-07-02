import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../css/doghnutProgress.module.css';

const ProgressBar = ({ id }) => {
  const progress = useSelector((state) => state.books.progress[id]);
  const percent = Math.floor((progress / 360) * 100);
  const setProgress = {
    '--progress': `${progress}deg`,
  };
  return (
    <div id={styles.progressContainer}>
      <div className={styles.fontMontserrat} id={styles.circle} style={setProgress}> </div>
      <div id={styles.percentContainer}>
        <span className={styles.fontMontserrat} id={styles.percent}>
          {percent}
          %
        </span>
        <span className={styles.fontMontserrat} id={styles.completed}>completed</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ProgressBar;
