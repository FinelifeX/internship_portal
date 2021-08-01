import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './FormItem.module.css';

const FormItem = ({ children, label, className }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={classNames(styles.label, className)}>
    {children}
    {label}
  </label>
);

FormItem.defaultProps = {
  label: '',
  className: '',
};

FormItem.propTypes = {
  children: PT.element.isRequired,
  label: PT.element,
  className: PT.string,
};

export default FormItem;
