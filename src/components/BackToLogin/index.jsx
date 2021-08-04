import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoutes } from '../../routes/auth';
import styles from './BackToLogin.module.css';

const BackToLogin = () => (
  <p className={styles.text}>
    Remembered your password? <Link to={AuthRoutes.Login}>Back to Log In</Link>
  </p>
);

export default BackToLogin;
