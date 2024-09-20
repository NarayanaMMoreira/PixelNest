import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa'; // Importando os ícones

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 60px;
  height: 100vh;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Banner = styled.div`
  width: 50%;
  height: 100vh;
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 90px;
  }
  p {
    font-size: 16px;
    width: 80%;
    margin: 0 auto;
  }

  img {
    width: 70%;
    margin: 60px auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const Formulario = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 0;

  form {
    display: flex;
    flex-direction: column;
  }
  p {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 10px 10px 40px; 
  width: 300px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
`;

const Icon = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary-color);
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 150px;
  margin: 0 auto;
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const Link = styled.a`
  margin-top: 20px;
  color: var(--tertiary-color);
  cursor: pointer;
`;

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://auth-login-api-v3kt.onrender.com/auth/login', {
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
      <Banner>
        <h2>Seja bem-vindo!  🚀</h2>
        <p>Se você já faz parte da nossa família, é só se conectar com os seus dados. Se ainda não, prepare-se para uma jornada repleta de diversão e descobertas!</p>
        <img src="/images/pessoas.png" alt="Mulher e homem sentados" />
      </Banner>

      <Formulario>
        <h2>Login</h2>
        <p>Que bom te ver de volta! Estamos animados para continuar essa jornada incrível juntos! ✨</p>
        <form onSubmit={handleLogin}>
          <InputWrapper>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              placeholder="Email ou Nome de Usuário"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Entrar</Button>
        </form>
        {message && <p>{message}</p>}
        <Link href="/cadastrar">Ainda não tenho cadastro</Link> {/* Adicionei a rota aqui */}
      </Formulario>
    </LoginWrapper>
  );
};

export default Login;
