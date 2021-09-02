/* eslint-disable react/button-has-type */
import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export type ButtonProps = {
  className?: string;
  variant?: 'primary' | 'outline' | 'link';
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  'data-testid'?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  onClick = undefined,
  'data-testid': dataTestId = 'button',
}) => {
  const resultClassName = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.outline]: variant === 'outline',
    [styles.link]: variant === 'link',
    [className]: true,
  });

  return (
    <button
      data-testid={dataTestId}
      className={resultClassName}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
