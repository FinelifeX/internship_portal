import React from 'react';
import caretUp from '../../assets/images/caret-up.svg';
import caretDown from '../../assets/images/caret-down.svg';
import filterIcon from '../../assets/images/filter.svg';
import Button from '../Button';
import { columnItem as columnItemType } from './propTypes';
import styles from './TableHeadCell.module.css';

const TableHeadCell = ({ columnItem }) => {
  const { title, sorter, filter } = columnItem;

  return (
    <th className={styles.cell}>
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
        {filter && (
          <Button
            variant="link"
            onClick={() => {
              // TODO: implement filtering
            }}
          >
            <img src={filterIcon} alt={`Filter by ${title}`} />
          </Button>
        )}
      </div>
    </th>
  );
};

TableHeadCell.propTypes = {
  columnItem: columnItemType.isRequired,
};

export default TableHeadCell;
