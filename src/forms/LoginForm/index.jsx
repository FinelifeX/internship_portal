import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import styles from './LoginForm.module.css';

const LoginForm = () => (
  <Form>
    <FormItem>
      <InputField placeholder="Email" />
    </FormItem>
    <FormItem>
      <InputField type="password" placeholder="Password" />
    </FormItem>
    <div className={styles.rememberMe}>
      <FormItem className={styles.rememberMeCheckbox}>
        <Checkbox label="Remember Me" />
      </FormItem>
      <Link to="/auth/reset-pass">Forgot your password?</Link>
    </div>
    <div className={styles.actions}>
      <Button type="submit">Sign In</Button>
    </div>
  </Form>
);

export default LoginForm;
