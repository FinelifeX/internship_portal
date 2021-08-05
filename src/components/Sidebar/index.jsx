import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { STREAMS_ROUTES_BASE } from '../../routes/streams';
import toggle from '../../assets/images/side_toggle.svg';
import rocket from '../../assets/images/rocket.svg';
import person from '../../assets/images/person.svg';
import Button from '../Button';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={classNames({
        [styles.sidebar]: true,
        [styles.sidebarCollapsed]: collapsed,
      })}
    >
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarNavList}>
          <li className={styles.sidebarNavListItem}>
            <NavLink
              className={styles.sidebarNavListItemLink}
              activeClassName={styles.sidebarNavListItemLinkActive}
              to={STREAMS_ROUTES_BASE}
            >
              <img
                className={styles.icon}
                src={rocket}
                alt=" Internship Streams"
              />
              {!collapsed && (
                <span className={styles.text}>Internship Streams</span>
              )}
            </NavLink>
          </li>
          <li className={styles.sidebarNavListItem}>
            <NavLink
              className={styles.sidebarNavListItemLink}
              activeClassName={styles.sidebarNavListItemLinkActive}
              to="/interns"
            >
              <img className={styles.icon} src={person} alt="Interns" />
              {!collapsed && <span className={styles.text}>Interns</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <Button
          variant="link"
          className={styles.toggle}
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
        >
          <img src={toggle} alt="Toggle sidebar" />
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
