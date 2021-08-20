import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import styles from './Form.module.css';

const Form = ({ children, className, onSubmit }) => (
  <form
    data-testid="form"
    className={classNames(styles.form, className)}
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

Form.defaultProps = {
  className: '',
  onSubmit: () => {},
};

Form.propTypes = {
  children: PT.node.isRequired,
  className: PT.string,
  onSubmit: PT.func,
};

export default Form;
