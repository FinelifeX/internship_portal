import React from 'react';
import PT from 'prop-types';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import styles from './AddStream.module.css';

const AddStream = ({ visible, onClose }) => (
  <Modal
    className={styles.modal}
    visible={visible}
    onClose={onClose}
    title="Add Stream"
    dismissible
    footer={[
      <Button
        className={styles.footerButton}
        key="cancel"
        variant="outline"
        onClick={onClose}
      >
        Cancel
      </Button>,
      <Button className={styles.footerButton} key="continue" variant="primary">
        Continue
      </Button>,
    ]}
  >
    <div>Add Stream Form</div>
  </Modal>
);

AddStream.propTypes = {
  visible: PT.bool.isRequired,
  onClose: PT.func.isRequired,
};

export default AddStream;
