import React from 'react';
import Button, { ButtonProps } from './index';

export default {
  component: Button,
  title: 'Components/Button',
};
const Template = (props: ButtonProps) => <Button {...props} />;

export const Primary = Template.bind({});

(Primary as any).args = {
  variant: 'primary',
  children: 'Button',
};
