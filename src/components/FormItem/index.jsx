import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './FormItem.module.css';

const FormItem = ({
  children,
  label,
  className,
  labelClassName,
  labelFirst,
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={classNames(styles.label, className)}>
    <span className={labelClassName}>{labelFirst && label}</span>
    {children}
    <span className={labelClassName}>{!labelFirst && label}</span>
  </label>
);

FormItem.defaultProps = {
  label: '',
  className: '',
  labelClassName: '',
  labelFirst: false,
};

FormItem.propTypes = {
  children: PT.element.isRequired,
  label: PT.element,
  className: PT.string,
  labelClassName: PT.string,
  labelFirst: PT.bool,
};

export default FormItem;
