import React from 'react';
import PT from 'prop-types';
import styles from './TableBodyCell.module.css';

const TableBodyCell = ({ children }) => (
  <td className={styles.cell}>{children}</td>
);

TableBodyCell.propTypes = {
  children: PT.oneOfType([PT.node]).isRequired,
};

export default TableBodyCell;
