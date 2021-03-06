import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, className, checked, onChange }) => (
  <label
    data-testid="label"
    className={classNames(styles.container, className)}
    htmlFor="checkbox"
  >
    <input
      data-testid="checkbox"
      className={styles.checkbox}
      id="checkbox"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span data-testid="text" className={styles.label}>
      {label}
    </span>
  </label>
);

Checkbox.defaultProps = {
  className: '',
  checked: undefined,
  onChange: undefined,
};

Checkbox.propTypes = {
  label: PT.string.isRequired,
  className: PT.string,
  checked: PT.bool,
  onChange: PT.func,
};

export default Checkbox;
