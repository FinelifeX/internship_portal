import React from 'react';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import styles from './SignUpForm.module.css';

const SignUpForm = () => (
  <Form>
    <FormItem>
      <InputField placeholder="First Name" />
    </FormItem>
    <FormItem>
      <InputField placeholder="Last Name" />
    </FormItem>
    <FormItem>
      <InputField placeholder="Email" />
    </FormItem>
    <FormItem>
      <InputField placeholder="Password" />
    </FormItem>
    <FormItem>
      <InputField placeholder="Confirm Password" />
    </FormItem>
    <div className={styles.actions}>
      <Button type="submit">Register</Button>
    </div>
  </Form>
);

export default SignUpForm;
