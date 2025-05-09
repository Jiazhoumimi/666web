import React from 'react';
import './Login.css';
import InputField from '../components/input/InputField';
import { useLoginForm } from '../hooks/useLoginForm';

const Login = () => {
  const {
    email, setEmail,
    password, setPassword,
    success, error, loading,
    handleLogin
  } = useLoginForm();

  const inputFields = [
    { id: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'Email here...', value: email, setter: setEmail },
    { id: 'password', label: 'PASSWORD', type: 'password', placeholder: 'Password', value: password, setter: setPassword },
  ];

  return (
    <div className="login-wrapper">
      <div className="login-container bg-bg">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">LOGIN</h2>
          <p className="login-subtitle">Already have an account?</p>

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

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'SIGN IN'}
          </button>

          {success && (
            <p style={{ color: 'green', marginTop: '12px', textAlign: 'center' }}>
              Login successful! Redirecting...
            </p>
          )}
          {error && (
            <p style={{ color: 'red', marginTop: '12px', textAlign: 'center' }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
