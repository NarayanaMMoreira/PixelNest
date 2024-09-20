import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-login-api-v3kt.onrender.com/', {
        emailOrUsername,
        password,
      });
      setMessage(response.data.msg);
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.msg);
      } else {
        setMessage('Erro ao fazer login');
      }
    }
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Email ou Nome de Usuário"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
      {message && <p>{message}</p>}
    </LoginWrapper>
  );
};

export default Login;
