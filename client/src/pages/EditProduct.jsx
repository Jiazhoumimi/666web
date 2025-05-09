import React, { useEffect, useState } from 'react';
import {
  Box,
  Title,
  Notification,
  Center,
  Loader,
  Group,
  Text,
  Divider,
} from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';

import FormInput from '../components/input/FormInput';// REUSABLE COMPONENT
import SelectField from '../components/select/SelectField';// REUSABLE COMPONENT
import SmallButton from '../components/button/SmallButton';// REUSABLE COMPONENT

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // ✅ GET PRODUCT BY ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://n11501910.ifn666.com/assessment02/products/${id}`);
        const data = await response.json();
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
      } catch (err) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://n11501910.ifn666.com/assessment02/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, price, category }),
      });

      if (!response.ok) {
        throw new Error('Failed to update');
      }

      setSuccess(true);
      setTimeout(() => navigate('/products/manage'), 1000);
    } catch (err) {
      setError(err.message || 'Update failed');
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Center style={{ height: '300px', flexDirection: 'column' }}>
        <Loader size="lg" />
        <div style={{ marginTop: '10px' }}>Loading product...</div>
      </Center>
    );
  }

  return (
    <Box maw={500} mx="auto" mt="xl">
      <Title order={3} mb="md">Edit Product</Title>

      {/* 🔍 PRODUCT PREVIEW */}
      <Box mb="lg" p="md" style={{ backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
        <Text size="sm" color="dimmed">ID: {id}</Text>
        <Text size="lg" weight={600}>{name}</Text>
        <Text size="sm">Price: ${price}</Text>
        <Text size="sm">Category: {category}</Text>
      </Box>

      <Divider my="sm" />

      {/* NOTIFICATIONS */}
      {error && <Notification color="red" mb="sm">{error}</Notification>}
      {success && <Notification color="green" mb="sm">Update successful</Notification>}

      {/* 🔧 FORM */}
      <form onSubmit={handleSubmit}>
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
          mt="md"
        />

        <SelectField
          label="Category"
          value={category}
          onChange={setCategory}
          data={[
            { value: 'Home Appliances', label: 'Home Appliances' },
            { value: 'Electronics', label: 'Electronics' },
            { value: 'Clothing', label: 'Clothing' },
            { value: 'Books', label: 'Books' },
          ]}
          mt="md"
        />

        {/* BUTTONS */}
        <Group position="apart" mt="xl">
          <SmallButton color="dark" variant="outline" onClick={handleCancel}>
            Cancel
          </SmallButton>
          <SmallButton type="submit" color="dark" variant="filled">
            Update
          </SmallButton>
        </Group>
      </form>
    </Box>
  );
};

export default EditProduct;
