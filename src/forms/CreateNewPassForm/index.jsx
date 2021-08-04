import React from 'react';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import BackToLogin from '../../components/BackToLogin';
import styles from './CreateNewPassForm.module.css';

const CreateNewPassForm = () => (
  <Form>
    <p className={styles.title}>Create new password</p>
    <FormItem>
      <InputField type="password" placeholder="Password" />
    </FormItem>
    <FormItem>
      <InputField type="password" placeholder="Confirm password" />
    </FormItem>
    <div className={styles.actions}>
      <Button type="submit">Reset password and Log in</Button>
    </div>
    <BackToLogin />
  </Form>
);

export default CreateNewPassForm;
