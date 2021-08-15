import React, { useState } from 'react';
import PT from 'prop-types';
import filterIcon from '../../../assets/images/filter.svg';
import Button from '../../Button';
import styles from './FilterButton.module.css';

const FilterButton = ({ title, filters }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.container}>
      <Button
        variant="link"
        className={styles.filterButton}
        onClick={() => {
          setShowPopup((shown) => !shown);
        }}
      >
        <img src={filterIcon} alt={`Filter by ${title}`} />
      </Button>
      {showPopup && (
        <div className={styles.popup}>
          <ul className={styles.filters}>
            {filters.map(({ id, name }) => {
              const checkboxId = `filter-${id}`;
              return (
                <li key={id} className={styles.filtersItem}>
                  <label htmlFor={checkboxId}>
                    <input
                      type="checkbox"
                      id={checkboxId}
                      className={styles.filtersItemCheckbox}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

FilterButton.defaultProps = {
  title: '',
  filters: [],
};

FilterButton.propTypes = {
  title: PT.string,
  filters: PT.arrayOf(PT.shape()),
};

export default FilterButton;
