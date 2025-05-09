// src/hooks/useRegisterForm.js
import { useState } from 'react';

export const useRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://n11501910.ifn666.com/assessment02/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error('Registration failed');

      setSuccess(true);
      setError('');
      setName(''); setEmail(''); setPassword('');

      setTimeout(() => { window.location.href = '/'; }, 1500);
    } catch (err) {
      setError(err.message || 'Unknown error');
    }
  };

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    success, error,
    handleRegister,
  };
};
