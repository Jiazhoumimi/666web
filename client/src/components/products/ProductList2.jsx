// PRODUCT LIST 🌸 AFTER LOGIN

import React, { useState, useEffect } from 'react';
import {
  Container,
  Flex,
  Select,
  Loader,
  Center,
  Text,
  SimpleGrid,
  Group,
  Button,
} from '@mantine/core';
import ProductCard2 from './ProductCard2';

const ProductList2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [category, setCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const token = localStorage.getItem('token');
  const limit = 6;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('limit', limit);
      params.append('page', page);
      if (category) params.append('category', category);
      if (sortOrder) params.append('sort', sortOrder);

      const response = await fetch(`https://n11501910.ifn666.com/assessment02/products?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://n11501910.ifn666.com/assessment02/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete');
      }

      fetchProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, sortOrder, page]);

  if (loading) {
    return (
      <Center style={{ height: '400px' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ height: '400px' }}>
        <Text color="red" size="lg">
          Failed to load products: {error}
        </Text>
      </Center>
    );
  }

  return (
    <Container size="md" mt="lg">
      <Flex justify="space-between" align="center" mb="md">
        <Select
          label="Category"
          data={[
            { value: '', label: 'All' },
            { value: 'Home Appliances', label: 'Home Appliances' },
            { value: 'Electronics', label: 'Electronics' },
            { value: 'Clothing', label: 'Clothing' },
            { value: 'Books', label: 'Books' },
          ]}
          value={category}
          onChange={(value) => {
            setPage(1);
            setCategory(value);
          }}
          clearable={false}
          w={220}
        />

        <Select
          label="Sort by"
          data={[
            { value: 'price', label: 'Price: Low to High' },
            { value: '-price', label: 'Price: High to Low' },
          ]}
          value={sortOrder}
          onChange={(value) => {
            setPage(1);
            setSortOrder(value);
          }}
          clearable={false}
          w={220}
        />
      </Flex>

      <SimpleGrid cols={3} spacing="sm">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard2
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              category={product.category}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <Center style={{ height: '300px', gridColumn: '1 / -1' }}>
            <Text color="dimmed">No products found matching your filters.</Text>
          </Center>
        )}
      </SimpleGrid>

      <Flex justify="space-between" align="center" mt="xl">
        <Text size="sm" color="dimmed">
          Showing {Math.min(page * limit, total)} of {total}
        </Text>

        <Group spacing="xs">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <Button
                key={pageNumber}
                variant="subtle"
                onClick={() => setPage(pageNumber)}
                style={{
                  fontWeight: pageNumber === page ? 'bold' : 'normal',
                  textDecoration: pageNumber === page ? 'underline' : 'none',
                  backgroundColor: 'transparent',
                  color: '#000',
                }}
              >
                {pageNumber}
              </Button>
            );
          })}
        </Group>

        <Button
          variant="subtle"
          onClick={() => {
            setCategory('');
            setSortOrder('');
            setPage(1);
          }}
        >
          View all
        </Button>
      </Flex>
    </Container>
  );
};

export default ProductList2;
