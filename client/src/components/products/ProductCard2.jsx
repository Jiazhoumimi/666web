import React from 'react';
import { Card, Text, Group, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import SmallButton from '../button/SmallButton'; // ✅ REUSABLE SMALL BUTTON

const ProductCard2 = ({ _id, name, price, category, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (confirm) {
      onDelete(_id);
    }
  };

  return (
    <Card
      shadow="xs"
      padding="sm"
      radius="md"
      withBorder
      style={{
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Stack spacing={2}>
        <Text size="xs" color="dimmed">ID: {_id}</Text>
        <Text weight={600} size="md">{name}</Text>
        <Text size="sm">Price: ${price}</Text>
        <Text size="sm">Category: {category}</Text>
      </Stack>

      <Group position="apart" mt="xs">
        <SmallButton
          color="pink"
          variant="light"
          onClick={() => navigate(`/products/edit/${_id}`)}
        >
          Edit
        </SmallButton>

        <SmallButton
          color="dark"
          variant="filled"
          onClick={handleDelete}
        >
          Delete
        </SmallButton>
      </Group>
    </Card>
  );
};

export default ProductCard2;
