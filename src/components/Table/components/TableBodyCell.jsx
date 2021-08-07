import React from 'react';
import PT from 'prop-types';
import styles from './TableBodyCell.module.css';

const TableBodyCell = ({ children, width }) => (
  <td className={styles.cell} width={width}>
    {children}
  </td>
);

TableBodyCell.defaultProps = {
  width: undefined,
};

TableBodyCell.propTypes = {
  children: PT.oneOfType([PT.node]).isRequired,
  width: PT.oneOfType([PT.string, PT.number]),
};

export default TableBodyCell;
