import React from 'react';
import { Select } from '@mantine/core';

const SelectField = ({
  label,
  value,
  onChange,
  data,
  placeholder = 'Select...',
  required = true,
  mt = 'md',
  ...props
}) => {
  return (
    <Select
      label={label}
      data={data}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      mt={mt}
      {...props}
    />
  );
};

export default SelectField;
