import React from 'react';
import PT from 'prop-types';
import styles from './ModalFooter.module.css';

const ModalFooter = ({ children }) => {
  if (!children) return null;

  return <footer className={styles.footer}>{children}</footer>;
};

ModalFooter.defaultProps = {
  children: null,
};

ModalFooter.propTypes = {
  children: PT.node,
};

export default ModalFooter;
