// VIEW ALL PRODUCTS 🌸 BEFORE LOGIN

import { Card, Text, Center } from '@mantine/core';
import SmallButton from '../button/SmallButton'; // ✅ SMALL BUTTON COMPONENT

const ProductCard = ({ name, price, category }) => {
  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      style={{
        width: 260,            
        height: 300,           
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {/* PRODUCT NAME */}
        <Text weight={600} size="md" align="center" mt="sm">
          {name}
        </Text>

        {/* PRICE */}
        <Text color="dimmed" size="sm" align="center" mt="xs">
          Price: ${price}
        </Text>

        {/* CATEGORY */}
        <Text color="dimmed" size="sm" align="center" mt="xs">
          Category: {category}
        </Text>
      </div>

      {/* View Details Button */}
      <Center mt="md">
        <SmallButton color="dark" variant="outline">
          Details
        </SmallButton>
      </Center>
    </Card>
  );
};

export default ProductCard;
