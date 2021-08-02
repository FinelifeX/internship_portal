import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, variant }) => {
  const resultClassName = classNames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.outline]: variant === 'outline',
    [styles.link]: variant === 'link',
    [className]: true,
  });

  return (
    <button className={resultClassName} type="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
};

Button.propTypes = {
  children: PT.element.isRequired,
  className: PT.string,
  variant: PT.oneOf(['primary', 'outline', 'link']),
};

export default Button;
