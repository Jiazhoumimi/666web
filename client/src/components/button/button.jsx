// src/components/button/button.jsx

import React from 'react';
import { Button } from '@mantine/core';

const CustomButton = ({ children, onClick, type = "button", color = "blue" }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      color={color} // Use the passed color, default is blue
      variant="filled"
      style={{
        width: '180px', // Fixed width, can be adjusted
        height: '45px', // Fixed height
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase', // Button text in uppercase
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
