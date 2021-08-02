import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, className }) => (
  <span className={classNames(styles.container, className)}>
    <input className={styles.checkbox} id="checkbox" type="checkbox" />
    <span className={styles.label}>{label}</span>
  </span>
);

Checkbox.defaultProps = {
  className: '',
};

Checkbox.propTypes = {
  label: PT.string.isRequired,
  className: PT.string,
};

export default Checkbox;
