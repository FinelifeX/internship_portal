import React from 'react';
import PT from 'prop-types';

const ModalBody = ({ children }) => <section>{children}</section>;

ModalBody.defaultProps = {
  children: null,
};

ModalBody.propTypes = {
  children: PT.node,
};

export default ModalBody;
