import React from 'react';
import PT from 'prop-types';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import styles from './Modal.module.css';

const Modal = ({
  visible,
  dismissible,
  title,
  footer,
  onClose,
  children,
  className,
}) =>
  visible &&
  createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={classNames(styles.content, className)} role="dialog">
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
  className: '',
};

Modal.propTypes = {
  visible: PT.bool,
  dismissible: PT.bool,
  title: PT.node,
  footer: PT.node,
  onClose: PT.func,
  className: PT.string,
};

export default Modal;
