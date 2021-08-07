import React, { useState } from 'react';
import PT from 'prop-types';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import Pagination from './components/Pagination';
import { columnItem } from './propTypes';
import { displayOptions } from './contants';
import styles from './Table.module.css';

const Table = ({ columns, dataSource, hasPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesDisplayed, setEntriesDisplayed] = useState(displayOptions[0]);

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHead columns={columns} />
          <TableBody columns={columns} dataSource={dataSource} />
        </table>
      </div>
      {hasPagination && (
        <Pagination
          page={currentPage}
          total={dataSource?.length ?? 0}
          displayed={entriesDisplayed}
          onPageChange={setCurrentPage}
          onDisplayChange={setEntriesDisplayed}
        />
      )}
    </div>
  );
};

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
