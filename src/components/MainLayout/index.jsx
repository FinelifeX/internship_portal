import React from 'react';
import PT from 'prop-types';
import Header from '../Header';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <div>SideBar</div>
      <section>{children}</section>
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PT.element.isRequired,
};

export default MainLayout;
