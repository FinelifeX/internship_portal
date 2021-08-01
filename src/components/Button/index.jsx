import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className }) => (
  <button className={classNames(styles.button, className)} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PT.element.isRequired,
  className: PT.string,
};
