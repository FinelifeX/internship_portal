import React from 'react';
import PT from 'prop-types';
import { columnItem } from './propTypes';
import TableBodyCell from './TableBodyCell';

const TableBody = ({ columns, dataSource }) => (
  <tbody>
    {dataSource.map((dataItem) => (
      <tr>
        {columns.map(({ key, dataIndex }) => (
          <TableBodyCell key={key} />
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
