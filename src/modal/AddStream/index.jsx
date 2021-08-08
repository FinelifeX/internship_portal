import React from 'react';
import Modal from '../../components/Modal';

const AddStream = ({ visible, onClose }) => (
  <Modal visible={visible} onClose={onClose} title="Add Stream" dismissible>
    <div>Add Stream Form</div>
  </Modal>
);

export default AddStream;
