import React from 'react';
import PT from 'prop-types';
import { columnItem } from './propTypes';
import TableHeadCell from './TableHeadCell';

const TableHead = ({ columns }) => (
  <thead>
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
