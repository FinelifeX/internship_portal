import React from 'react';
import caretUp from '../../../assets/images/caret-up.svg';
import caretDown from '../../../assets/images/caret-down.svg';
import Button from '../../Button';
import { columnItem as columnItemType } from '../propTypes';
import styles from './TableHeadCell.module.css';
import FilterButton from './FilterButton';

const TableHeadCell = ({ columnItem }) => {
  const { title, sorter, filters, width } = columnItem;

  console.log(columnItem);

  return (
    <th className={styles.cell} width={width}>
      <div className={styles.cellInner}>
        <span>{title}</span>
        {sorter && (
          <Button
            variant="link"
            onClick={() => {
              // TODO: implement filtering
            }}
          >
            <div>
              <img src={caretUp} alt="Sort ascending" />
              <img src={caretDown} alt="Sort descending" />
            </div>
          </Button>
        )}
        {filters && <FilterButton title={title} filters={filters} />}
      </div>
    </th>
  );
};

TableHeadCell.propTypes = {
  columnItem: columnItemType.isRequired,
};

export default TableHeadCell;
