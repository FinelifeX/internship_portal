import React from 'react';
import PT from 'prop-types';
import AkvelonLogo from '../../assets/images/akvelon_logo.png';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children }) => (
  <main className={styles.main}>
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <img src={AkvelonLogo} alt="Akvelon Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  </main>
);

AuthLayout.propTypes = {
  children: PT.element.isRequired,
};

export default AuthLayout;
