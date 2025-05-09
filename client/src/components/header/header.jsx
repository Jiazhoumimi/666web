import React from 'react';
import { Box, Container } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <Box
      component="header"
      style={{
        backgroundColor: '#fce4ec',
        borderBottom: 'none',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        padding: '40px 32px',
      }}
    >
      <Container size="xl">
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* 🌸 LEFT NAVIBAR */}
          <Box style={{ display: 'flex', gap: '60px', justifyContent: 'flex-start' }}>
            <Link to="/" style={navStyle}>Home</Link>
            <Link to="/products" style={navStyle}>Products</Link>
            <Link to="/management" style={navStyle}>Management</Link>
          </Box>

          {/* MIDDLE Logo */}
          <Box style={{
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '2px',
            color: '#000',
            cursor: 'default',
            userSelect: 'none',
            pointerEvents: 'none',
            justifySelf: 'center',
          }}>
            666 ORDER MANAGEMENT
          </Box>

          {/* 🌸 RIGHT：LOGIN NAME LOGOUT */}
          <Box style={{ display: 'flex', gap: '40px', justifyContent: 'flex-end', alignItems: 'center' }}>
            {token && userName ? (
              <>
                <span style={{ ...navStyle, textTransform: 'none' }}>
                  HELLO {userName}
                </span>
                <span onClick={handleLogout} style={{ ...navStyle, cursor: 'pointer' }}>
                  LOG OUT
                </span>
              </>
            ) : (
              <>
                <Link to="/login" style={navStyle}>Login</Link>
                <Link to="/register" style={navStyle}>Register</Link>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const navStyle = {
  color: '#000',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
};

export default AppHeader;
