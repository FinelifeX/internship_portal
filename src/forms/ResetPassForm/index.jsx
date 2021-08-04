import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import styles from './ResetPassForm.module.css';
import { AuthRoutes } from '../../routes/auth';

const ResetPassForm = () => (
  <Form>
    <div className={styles.header}>
      <p className={styles.title}>Reset the password</p>
      <p className={styles.hint}>
        Enter your email so we can send you reset link
      </p>
    </div>
    <FormItem>
      <InputField type="email" placeholder="Email" />
    </FormItem>
    <div className={styles.actions}>
      <Button>Send a link</Button>
    </div>
    <p className={styles.footer}>
      Remembered you password? <Link to={AuthRoutes.Login}>Back to Log In</Link>
    </p>
  </Form>
);

export default ResetPassForm;
