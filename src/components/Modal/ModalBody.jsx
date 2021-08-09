import React from 'react';
import PT from 'prop-types';
import styles from './ModalBody.module.css';

const ModalBody = ({ children }) => (
  <section className={styles.body}>{children}</section>
);

ModalBody.defaultProps = {
  children: null,
};

ModalBody.propTypes = {
  children: PT.node,
};

export default ModalBody;
