import React from 'react';
import './Login.css';
import InputField from '../components/input/InputField';
import { useRegisterForm } from '../hooks/useRegisterForm';

const Register = () => {
  const {
    name, setName,
    email, setEmail,
    password, setPassword,
    success, error,
    handleRegister
  } = useRegisterForm();

  const inputFields = [
    { id: 'name', label: 'NAME', type: 'text', placeholder: 'Enter your name', value: name, setter: setName },
    { id: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'Enter your email', value: email, setter: setEmail },
    { id: 'password', label: 'PASSWORD', type: 'password', placeholder: 'Create a password', value: password, setter: setPassword },
  ];

  return (
    <div className="login-container bg-bg">
      <form className="login-form" onSubmit={handleRegister}>
        <h2 className="login-title">REGISTER</h2>
        <p className="login-subtitle">Create a new account</p>

        {inputFields.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => field.setter(e.target.value)}
          />
        ))}

        <button type="submit">SIGN UP</button>

        {success && <p style={{ color: 'green', marginTop: '12px', textAlign: 'center' }}>Registration successful!</p>}
        {error && <p style={{ color: 'red', marginTop: '12px', textAlign: 'center' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
