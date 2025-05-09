// src/components/input/InputField.jsx
import React from 'react';

const InputField = ({ id, label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
