import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './InputField.module.css';

const InputField = ({
  className,
  id,
  type,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
}) => (
  <input
    className={classNames(styles.input, className)}
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

InputField.defaultProps = {
  className: '',
  id: undefined,
  type: 'text',
  value: undefined,
  placeholder: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

InputField.propTypes = {
  className: PT.string,
  id: PT.oneOfType([PT.string, PT.number]),
  type: PT.oneOf(['text', 'password', 'email', 'number']),
  value: PT.oneOfType([PT.number, PT.string]),
  placeholder: PT.string,
  onChange: PT.func,
  onFocus: PT.func,
  onBlur: PT.func,
};

export default InputField;
