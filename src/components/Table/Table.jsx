import React, { useEffect, useMemo, useReducer, useState } from 'react';
import PT from 'prop-types';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import Pagination from './components/Pagination';
import { columnItem } from './propTypes';
import { displayOptions } from './contants';
import styles from './Table.module.css';
import TableContext from './TableContext';

const Table = ({ columns, dataSource, hasPagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesDisplayed, setEntriesDisplayed] = useState(displayOptions[0]);
  const [filters, changeFilters] = useReducer(
    (state, { field, value }) => ({ ...state, [field]: value }),
    Object.fromEntries(
      columns.filter((col) => !!col.filters).map((col) => [col.dataIndex, []]),
    ),
  );

  console.log(filters);

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
    <TableContext.Provider value={{ filters, changeFilters }}>
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
    </TableContext.Provider>
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
