import React from 'react';
import PT from 'prop-types';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import TableFoot from './components/TableFoot';
import { columnItem } from './propTypes';
import styles from './Table.module.css';

const Table = ({ columns, dataSource, hasPagination }) => (
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      <TableHead columns={columns} />
      <TableBody columns={columns} dataSource={dataSource} />
      {hasPagination && <TableFoot />}
    </table>
  </div>
);

Table.defaultProps = {
  dataSource: null,
  hasPagination: false,
};

Table.propTypes = {
  columns: PT.arrayOf(columnItem).isRequired,
  dataSource: PT.arrayOf(PT.shape()),
  hasPagination: PT.bool,
};

export default Table;
