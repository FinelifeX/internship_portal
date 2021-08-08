import React, { useEffect, useMemo, useState } from 'react';
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

  const displayedIndices = useMemo(
    () => ({
      first: (currentPage - 1) * entriesDisplayed,
      last: currentPage * entriesDisplayed,
    }),
    [currentPage, entriesDisplayed],
  );

  const displayedEntries = useMemo(() => {
    if (!dataSource) return [];

    return dataSource.slice(displayedIndices.first, displayedIndices.last);
  }, [dataSource, displayedIndices.first, displayedIndices.last]);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesDisplayed]);

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHead columns={columns} />
          <TableBody columns={columns} dataSource={displayedEntries} />
        </table>
      </div>
      {hasPagination && (
        <Pagination
          page={currentPage}
          total={dataSource?.length ?? 0}
          displayed={entriesDisplayed}
          onPageChange={setCurrentPage}
          onDisplayChange={setEntriesDisplayed}
          displayedIndices={displayedIndices}
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
