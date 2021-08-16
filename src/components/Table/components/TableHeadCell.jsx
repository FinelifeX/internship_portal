import React, { useCallback, useContext } from 'react';
import caretUp from '../../../assets/images/caret-up.svg';
import caretDown from '../../../assets/images/caret-down.svg';
import { columnItem as columnItemType } from '../propTypes';
import Button from '../../Button';
import TableContext from '../TableContext';
import FilterButton from './FilterButton';
import styles from './TableHeadCell.module.css';

const TableHeadCell = ({ columnItem }) => {
  const {
    title,
    sorter,
    filters: filtersConfig,
    width,
    dataIndex,
  } = columnItem;
  const { filters, changeFilters } = useContext(TableContext);
  const selection = filters[dataIndex];

  const handleFiltersChange = useCallback(
    (value) => {
      changeFilters({ field: dataIndex, value });
    },
    [changeFilters, dataIndex],
  );

  return (
    <th className={styles.cell} width={width}>
      <div className={styles.cellInner}>
        <span>{title}</span>
        {sorter && (
          <Button
            variant="link"
            onClick={() => {
              // TODO: implement sorting
            }}
          >
            <div>
              <img src={caretUp} alt="Sort ascending" />
              <img src={caretDown} alt="Sort descending" />
            </div>
          </Button>
        )}
        {filtersConfig && (
          <FilterButton
            title={title}
            filters={filtersConfig}
            selection={selection}
            onFiltersChange={handleFiltersChange}
          />
        )}
      </div>
    </th>
  );
};

TableHeadCell.propTypes = {
  columnItem: columnItemType.isRequired,
};

export default TableHeadCell;
