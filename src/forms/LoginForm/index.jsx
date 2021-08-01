import React from 'react';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';

const LoginForm = () => (
  <Form>
    <FormItem>
      <InputField placeholder="Email" />
    </FormItem>
    <FormItem>
      <InputField type="password" placeholder="Password" />
    </FormItem>
  </Form>
);

export default LoginForm;
