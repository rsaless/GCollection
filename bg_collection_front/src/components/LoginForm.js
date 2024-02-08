import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send login credentials to the parent component
    onLogin({ username, password });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Username:
        <StyledInput
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel>
        Password:
        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StyledLabel>
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;