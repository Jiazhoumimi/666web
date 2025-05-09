import React from 'react';
import { Container, Title } from '@mantine/core';
import ProductList from '../components/products/ProductList';

const Products = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="md">
        Products
      </Title>
      <ProductList />
    </Container>
  );
};

export default Products;
