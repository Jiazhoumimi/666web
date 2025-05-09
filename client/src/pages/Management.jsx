import React from 'react';
import { Box, Text, Center, Image, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/button/button';
import Banner2 from '../components/banner/Banner2';

const Management = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  return (
    <Box p="xl">
      {token ? (
        <Box>
          <Center>
            <Text size="xl" weight={700} mb="md">
              WELCOME!
            </Text>
          </Center>

          <Center mt="lg">
            <Box style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <CustomButton color="pink" onClick={() => navigate('/management/create')}>
                ADD PRODUCT
              </CustomButton>
              <CustomButton color="pink" onClick={() => navigate('/products/manage')}>
                EDIT PRODUCT
              </CustomButton>
            </Box>
          </Center>

          <Center mt="xl">
            <Flex gap="lg" justify="center" wrap="wrap">
              <Image
                src="/images/pinterest01.jpeg"
                alt="Pinterest Style 1"
                radius="xl"
                w={250}
              />
              <Image
                src="/images/pinterest02.jpeg"
                alt="Pinterest Style 2"
                radius="xl"
                w={250}
              />
            </Flex>
          </Center>

          <Center mt="lg">
            <Text size="md" color="dimmed">
              Order Management Coming Soon...
            </Text>
          </Center>
        </Box>
      ) : (
        <Box>
          <Banner2 />
          <Center style={{ flexDirection: 'column', marginTop: '20px' }}>
            <Text size="lg" weight={600} style={{ marginBottom: '20px', color: '#000' }}>
              Please log in to access management.
            </Text>
            <CustomButton color="dark" variant="filled" onClick={() => navigate('/login')}>
              LOG IN
            </CustomButton>
          </Center>
        </Box>
      )}
    </Box>
  );
};

export default Management;
