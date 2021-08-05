import React from 'react';
import { NavLink } from 'react-router-dom';
import { StreamsRoutes } from '../../routes/streams';
import styles from './StreamsTab.module.css';

const StreamsTabs = () => (
  <ul className={styles.tabs}>
    <li className={styles.tabsItem}>
      <NavLink
        className={styles.tabsItemLink}
        activeClassName={styles.tabsItemLinkActive}
        to={StreamsRoutes.Current}
      >
        Current Streams
      </NavLink>
    </li>
    <li className={styles.tabsItem}>
      <NavLink
        className={styles.tabsItemLink}
        activeClassName={styles.tabsItemLinkActive}
        to={StreamsRoutes.Finished}
      >
        Finished Streams
      </NavLink>
    </li>
  </ul>
);

export default StreamsTabs;
