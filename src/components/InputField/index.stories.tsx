import React from 'react';
import InputField, { InputFieldProps } from './index';

export default {
  component: InputField,
  title: 'Components/InputField',
};

const Template = (props: InputFieldProps) => <InputField {...props} />;

export const Default = Template.bind({});
