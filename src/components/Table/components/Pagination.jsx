import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import { displayOptions } from '../contants';
import styles from './Pagination.module.css';

const Pagination = ({
  total,
  displayed,
  page,
  onPageChange,
  onDisplayChange,
  displayedIndices,
}) => {
  const totalPages = Math.ceil(total / displayed);

  return (
    <div className={styles.container}>
      <span className={styles.count}>
        {displayedIndices.first + 1}-{displayedIndices.last} of {total} items
      </span>
      <ul className={styles.buttonsList}>
        <li className={styles.buttonsListItem}>
          <button
            type="button"
            className={styles.button}
            disabled={page === 1}
            onClick={() => {
              onPageChange(page - 1);
            }}
          >
            &lt;
          </button>
        </li>
        {new Array(totalPages).fill(0).map((item, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`page-${idx}`} className={styles.buttonsListItem}>
            <button
              type="button"
              className={classNames({
                [styles.button]: true,
                [styles.buttonActive]: page === idx + 1,
              })}
              onClick={() => {
                onPageChange(idx + 1);
              }}
            >
              {idx + 1}
            </button>
          </li>
        ))}
        <li className={styles.buttonsListItem}>
          <button
            type="button"
            className={styles.button}
            disabled={page === totalPages}
            onClick={() => {
              onPageChange(page + 1);
            }}
          >
            &gt;
          </button>
        </li>
      </ul>
      <select
        className={styles.select}
        onChange={(e) => {
          onDisplayChange(Number(e.target.value));
        }}
      >
        {displayOptions.map((option) => (
          <option key={option} value={option}>
            {option}/page
          </option>
        ))}
      </select>
    </div>
  );
};

Pagination.defaultProps = {
  onPageChange: () => {},
  onDisplayChange: () => {},
};

Pagination.propTypes = {
  total: PT.number.isRequired,
  displayed: PT.number.isRequired,
  page: PT.number.isRequired,
  onPageChange: PT.func,
  onDisplayChange: PT.func,
  displayedIndices: PT.shape({ first: PT.number, last: PT.number }),
};

export default Pagination;
