import React from 'react';
import { Box, Text, Stack } from '@mantine/core';

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        paddingLeft: '2rem',
        backgroundColor: '#fff',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        textAlign: 'left',
      }}
    >
      <Stack spacing="xs" align="flex-start">
        <Text size="sm" color="gray">
          About
        </Text>
        <Text size="sm" color="gray">
          Student Name: Sai Lo
        </Text>
        <Text size="sm" color="gray">
          ID: n11501910
        </Text>
        <Text size="sm" color="gray">
          Email: cecilia.paris0710@gmail.com
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
