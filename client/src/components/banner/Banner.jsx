import React from 'react';
import { Box, Text, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../button/button';// 🌺 REUSABLE BUTTON

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        display: 'flex',
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '40px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap', 
      }}
    >
      {/* LEFT PICTURE */}
      <Box style={{ flex: 1, minWidth: 300 }}>
        <Image
          src="/images/webdesign-2.jpg"
          alt="Banner"
          height={300}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </Box>

      {/* RIGHT DESCRIPTION */}
      <Box
        style={{
          flex: 1,
          backgroundColor: '#f8cdd0',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          minWidth: 300,
        }}
      >
        <Text
          size="xl"
          weight={800}
          style={{
            fontFamily: 'serif',
            color: '#d00052',
            marginBottom: '16px',
            letterSpacing: '1px',
            alignSelf: 'flex-start', 
          }}
        >
          WELCOME TO IFN666
        </Text>

        <Text
          size="sm"
          style={{
            lineHeight: 1.7,
            color: '#333',
            marginBottom: '40px',
            alignSelf: 'flex-start',
          }}
        >
          This assignment demonstrates a secure and fully functional order management system consisting of
          React, Express.js, and MongoDB. Users can register, log in using JWT authentication, and manage customer profiles, products, and orders. Due to time constraints, in my assignment I only showed on the front end that after logging into the management meta, products can be deleted, added, and updated.
          No login is required to browse products.
          My name is Cecilia Lo and my student number is n11501910.
          This is part of the IFN666 course at Queensland University of Technology.
        </Text>

        <CustomButton color="dark" onClick={() => navigate('/products')}>
          VIEW PRODUCTS
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Banner;
