import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    // Replace this with your actual login logic
    console.log('Login credentials:', credentials);
  };

  return (
    <div>
      <h1>Board Game Collection App</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;