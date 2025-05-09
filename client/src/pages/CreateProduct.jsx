import React, { useState } from 'react';
import {
  Box,
  Button,
  Notification,
  Container,
  Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import FormInput from '../components/input/FormInput'; // ✅ REUSABLE COMPONENT
import SelectField from '../components/select/SelectField'; // ✅ REUSABLE COMPONENT

const CreateProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    setSuccess(false);

    if (!name || price === null || !category) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://n11501910.ifn666.com/assessment02/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          price: Number(price),
          category,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create product');
      }

      setSuccess(true);
      setName('');
      setPrice(null);
      setCategory('');

      setTimeout(() => {
        navigate('/products');
      }, 1000);
    } catch (err) {
      console.error('❌ Submit error:', err);
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <Container size="xs" mt="lg">
      <Title order={2} mb="md" align="center">
        Create New Product
      </Title>

      {success && (
        <Notification
          color="green"
          title="Success"
          onClose={() => setSuccess(false)}
          mb="md"
        >
          Product created successfully!
        </Notification>
      )}

      {error && (
        <Notification
          color="red"
          title="Error"
          onClose={() => setError('')}
          mb="md"
        >
          {error}
        </Notification>
      )}

      <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <FormInput
          label="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          type="number"
          label="Price"
          value={price}
          onChange={setPrice}
          min={0}
          precision={2}
        />

        <SelectField
          label="Category"
          value={category}
          onChange={setCategory}
          data={[
            { value: 'Electronics', label: 'Electronics' },
            { value: 'Clothing', label: 'Clothing' },
            { value: 'Books', label: 'Books' },
            { value: 'Home Appliances', label: 'Home Appliances' },
          ]}
        />

        <Button
          color="dark"
          variant="filled"
          style={{ color: '#fff' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default CreateProduct;
