import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <p className={css.statItem}>Good: {good}</p>
      <p className={css.statItem}>Neutral: {neutral}</p>
      <p className={css.statItem}>Bad: {bad}</p>
      <p className={css.statItem}>Total: {total}</p>
      <p className={css.statItem}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
