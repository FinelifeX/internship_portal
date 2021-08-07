import React from 'react';
import PT from 'prop-types';
import { columnItem } from '../propTypes';
import TableBodyCell from './TableBodyCell';
import styles from './TableBody.module.css';

const TableBody = ({ columns, dataSource }) => (
  <tbody className={styles.tableBody}>
    {dataSource.map((dataItem) => (
      <tr className={styles.tableBodyRow} key={dataItem.id}>
        {columns.map(({ key, dataIndex, render }) => (
          <TableBodyCell key={key}>
            {render
              ? render(dataItem[dataIndex], dataItem)
              : dataItem[dataIndex]}
          </TableBodyCell>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.defaultProps = {
  columns: [],
  dataSource: [],
};

TableBody.propTypes = {
  columns: PT.arrayOf(columnItem),
  dataSource: PT.arrayOf(PT.shape()),
};

export default TableBody;
