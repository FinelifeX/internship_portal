import React from 'react';
import logo from '../../assets/images/akvelon_logo_small.png';
import Profile from '../Profile';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src={logo} alt="Akvelon Logo" />
    <Profile />
  </header>
);

export default Header;
