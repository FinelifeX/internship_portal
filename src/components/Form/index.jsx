import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Form.module.css';

const Form = ({ children, className }) => (
  <form className={classNames(styles.form, className)}>{children}</form>
);

Form.defaultProps = {
  className: '',
};

Form.propTypes = {
  children: PT.arrayOf(PT.element).isRequired,
  className: PT.string,
};

export default Form;
