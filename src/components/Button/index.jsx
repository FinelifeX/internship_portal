import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, variant, type }) => {
  const resultClassName = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.outline]: variant === 'outline',
    [styles.link]: variant === 'link',
    [className]: true,
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={resultClassName} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
  type: 'button',
};

Button.propTypes = {
  children: PT.element.isRequired,
  className: PT.string,
  variant: PT.oneOf(['primary', 'outline', 'link']),
  type: PT.oneOf(['button', 'submit']),
};

export default Button;
