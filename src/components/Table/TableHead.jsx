import React from 'react';
import PT from 'prop-types';
import { columnItem } from './propTypes';
import TableHeadCell from './TableHeadCell';
import styles from './TableHead.module.css';

const TableHead = ({ columns }) => (
  <thead className={styles.tableHead}>
    <tr>
      {columns.map(({ key, ...rest }) => (
        <TableHeadCell columnItem={rest} />
      ))}
    </tr>
  </thead>
);

TableHead.defaultProps = {
  columns: [],
};

TableHead.propTypes = {
  columns: PT.arrayOf(columnItem),
};

export default TableHead;
