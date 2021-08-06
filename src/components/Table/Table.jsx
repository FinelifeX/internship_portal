import React, { useMemo } from 'react';
import PT from 'prop-types';
import { columnItem } from './propTypes';
import TableHead from './TableHead';
import TableBody from './TableBody';
import styles from './Table.module.css';

const Table = ({ columns, dataSource, toolbelt, filterFn }) => {
  const displayedData = useMemo(
    () => dataSource.filter(filterFn),
    [dataSource, filterFn],
  );

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHead columns={columns} />
        <TableBody columns={columns} dataSource={displayedData} />
        <tfoot>
          <tr>
            <td>Col 1</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

Table.defaultProps = {
  dataSource: null,
  toolbelt: null,
  filterFn: (item) => item,
};

Table.propTypes = {
  columns: PT.arrayOf(columnItem).isRequired,
  dataSource: PT.arrayOf(PT.shape()),
  toolbelt: PT.element,
  filterFn: PT.func,
};

export default Table;
