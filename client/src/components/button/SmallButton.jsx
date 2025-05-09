// src/components/button/SmallButton.jsx

import React from 'react';
import { Button } from '@mantine/core';

const SmallButton = ({
  children,
  onClick,
  type = 'button',
  color = 'blue',
  variant = 'light',
  ...props 
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      color={color}
      variant={variant}
      size="xs"
      radius="md"
      style={{
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}
      {...props} 
    >
      {children}
    </Button>
  );
};

export default SmallButton;
