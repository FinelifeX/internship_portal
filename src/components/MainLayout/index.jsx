import React from 'react';
import PT from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Sidebar />
      <section>{children}</section>
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PT.element.isRequired,
};

export default MainLayout;
