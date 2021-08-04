import React from 'react';
import PT from 'prop-types';
import { AuthRoutes } from '../../routes/auth';
import Form from '../../components/Form';
import FormItem from '../../components/FormItem';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import BackToLogin from '../../components/BackToLogin';
import styles from './ResetPassForm.module.css';

const ResetPassForm = ({ history }) => (
  <Form
    onSubmit={() => {
      // TODO: replace with call to api
      history.push(AuthRoutes.CreatePass);
    }}
  >
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
      <Button type="submit">Send a link</Button>
    </div>
    <BackToLogin />
  </Form>
);

ResetPassForm.propTypes = {
  history: PT.shape({
    push: PT.func,
  }).isRequired,
};

export default ResetPassForm;
