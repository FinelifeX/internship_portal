import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import classNames from 'classnames';
import styles from './InputField.module.css';

export type InputFieldProps = {
  className?: string;
  id?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string | number;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};
const InputField: FC<InputFieldProps> = ({
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
    data-testid="input"
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

export default InputField;
