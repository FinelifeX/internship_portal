import React, { useCallback, useEffect, useState } from 'react';
import PT from 'prop-types';
import filterIcon from '../../../assets/images/filter.svg';
import Button from '../../Button';
import FilterPopup from './FilterPopup';
import styles from './FilterButton.module.css';

const FilterButton = ({ title, filters, selection, onFiltersChange }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = useCallback(() => {
    setShowPopup((shown) => !shown);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('click', togglePopup);
    }

    return () => {
      document.removeEventListener('click', togglePopup);
    };
  }, [showPopup, togglePopup]);

  return (
    <div className={styles.container}>
      <Button
        variant="link"
        className={styles.filterButton}
        onClick={togglePopup}
      >
        <img src={filterIcon} alt={`Filter by ${title}`} />
      </Button>
      {showPopup && (
        <FilterPopup
          options={filters}
          onChange={onFiltersChange}
          selection={selection}
        />
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
  filters: PT.arrayOf(PT.oneOfType([PT.shape(), PT.string])),
  selection: PT.arrayOf(PT.oneOfType([PT.string, PT.number])).isRequired,
  onFiltersChange: PT.func.isRequired,
};

export default FilterButton;
