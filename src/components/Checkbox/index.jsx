import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, className, checked, onChange }) => (
  <span className={classNames(styles.container, className)}>
    <input
      data-testid="checkbox"
      className={styles.checkbox}
      id="checkbox"
      type="checkbox"
      checked={checked ?? undefined}
      onChange={onChange}
    />
    <label data-testid="label" className={styles.label} htmlFor="checkbox">
      {label}
    </label>
  </span>
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
