import React from 'react';
import { Container, Title } from '@mantine/core';
import ProductList2 from '../components/products/ProductList2';

const ManageProducts = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="md">
        Manage Products
      </Title>
      <ProductList2 />
    </Container>
  );
};

export default ManageProducts;
