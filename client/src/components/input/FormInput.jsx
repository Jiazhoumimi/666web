import React from 'react';
import { TextInput, NumberInput } from '@mantine/core';

const FormInput = ({ type = 'text', ...props }) => {
  if (type === 'number') {
    return <NumberInput {...props} required />;
  }
  return <TextInput {...props} required />;
};

export default FormInput;
