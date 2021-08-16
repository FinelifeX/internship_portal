import React, { useCallback } from 'react';
import PT from 'prop-types';
import styles from './FilterPopup.module.css';

const FilterPopup = ({ options, onChange, selection }) => {
  const handleSelect = useCallback(
    (optionId) => (e) => {
      e.stopPropagation();

      const {
        target: { checked },
      } = e;
      const result = checked
        ? [...selection, optionId]
        : selection.filter((item) => item !== optionId);
      onChange(result);
    },
    [onChange, selection],
  );

  console.log(selection);

  return (
    <div
      className={styles.popup}
      role="presentation"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ul className={styles.filters}>
        {options.map((option) => {
          const checkboxId = `filter-${option.id ?? option}`;
          return (
            <li key={option.id ?? option} className={styles.filtersItem}>
              <label htmlFor={checkboxId}>
                <input
                  type="checkbox"
                  id={checkboxId}
                  name={option.id ?? option}
                  className={styles.filtersItemCheckbox}
                  onChange={handleSelect(option.id)}
                  checked={selection.includes(option.id ?? option)}
                />
                {option.name ?? option}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FilterPopup.propTypes = {
  options: PT.arrayOf(PT.oneOfType([PT.shape(), PT.string])).isRequired,
  onChange: PT.func.isRequired,
  selection: PT.arrayOf(PT.oneOfType([PT.string, PT.number])).isRequired,
};

export default FilterPopup;
