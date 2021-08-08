import React from 'react';
import PT from 'prop-types';
import closeIcon from '../../assets/images/close.svg';
import Button from '../Button';
import styles from './ModalHeader.module.css';

const ModalHeader = ({ title, dismissible, onClose }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    {dismissible && (
      <Button className={styles.close} variant="link" onClick={onClose}>
        <img className={styles.closeIcon} src={closeIcon} alt="Close" />
      </Button>
    )}
  </header>
);

ModalHeader.defaultProps = {
  title: null,
  dismissible: true,
  onClose: undefined,
};

ModalHeader.propTypes = {
  title: PT.node,
  dismissible: PT.bool,
  onClose: PT.func,
};

export default ModalHeader;
