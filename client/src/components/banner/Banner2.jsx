// MANAGEMENT 🌺 DECORATION


import React from 'react';
import { Box, Image, Text } from '@mantine/core';

const Banner2 = ({ 
  imageSrc = '/images/webdesign-4.jpeg', 
  title = 'Manage Your Orders Easily', 
  description = 'Welcome to a simple and secure order management experience.'
}) => {
  return (
    <Box
      style={{
        maxWidth: 400,
        margin: '20px auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Image
        src={imageSrc}
        alt="Decoration Banner"
        width="100%"
        height="auto"
        fit="cover"
      />

      {/* 动态文字 */}
      <Box style={{ padding: '16px' }}>
        <Text size="md" weight={600} color="pink" style={{ marginBottom: '8px' }}>
          {title}
        </Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Banner2;
