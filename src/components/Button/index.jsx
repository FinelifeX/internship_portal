/* eslint-disable react/button-has-type */
import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({
  children,
  className,
  variant,
  type,
  onClick,
  'data-testid': dataTestId,
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

Button.defaultProps = {
  className: '',
  variant: 'primary',
  type: 'button',
  onClick: undefined,
  'data-testid': 'button',
};

Button.propTypes = {
  children: PT.oneOfType([
    PT.element,
    PT.arrayOf(PT.element),
    PT.string,
    PT.number,
  ]).isRequired,
  className: PT.string,
  variant: PT.oneOf(['primary', 'outline', 'link']),
  type: PT.oneOf(['button', 'submit']),
  onClick: PT.func,
  'data-testid': PT.string,
};

export default Button;
