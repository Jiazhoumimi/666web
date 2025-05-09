import React from 'react';
import { Container } from '@mantine/core';
import Banner from '../components/banner/Banner.jsx'; 

const Home = () => {
  return (
    <Container
      size="lg"
      py="xl"
      style={{
        marginTop: '40px', 
      }}
    >
      <Banner />
    </Container>
  );
};

export default Home;
