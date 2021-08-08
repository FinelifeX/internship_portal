import React from 'react';
import PT from 'prop-types';
import { createPortal } from 'react-dom';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import styles from './Modal.module.css';

const Modal = ({ visible, dismissible, title, footer, onClose, children }) =>
  visible &&
  createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>
        <ModalHeader
          title={title}
          dismissible={dismissible}
          onClose={onClose}
        />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </div>
    </div>,
    document.getElementById('modal'),
  );

Modal.defaultProps = {
  visible: true,
  dismissible: true,
  title: null,
  footer: null,
  onClose: undefined,
};

Modal.propTypes = {
  visible: PT.bool,
  dismissible: PT.bool,
  title: PT.node,
  footer: PT.node,
  onClose: PT.func,
};

export default Modal;
