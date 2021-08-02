import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthRoutes } from '../../routes/auth';
import styles from './AuthTabs.module.css';

const AuthTabs = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to={AuthRoutes.Login}
          exact
          className={styles.navItemLink}
          activeClassName={styles.navItemLinkActive}
        >
          Login
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to={AuthRoutes.SignUp}
          exact
          className={styles.navItemLink}
          activeClassName={styles.navItemLinkActive}
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default AuthTabs;
