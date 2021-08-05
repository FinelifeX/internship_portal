import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, variant, type, onClick }) => {
  const resultClassName = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.outline]: variant === 'outline',
    [styles.link]: variant === 'link',
    [className]: true,
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={resultClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
  type: 'button',
  onClick: undefined,
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
};

export default Button;
