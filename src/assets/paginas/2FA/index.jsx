import React, { useState } from 'react';
import styled from 'styled-components';
import { FaKey } from 'react-icons/fa'; // Ícone para 2FA
import { useNavigate } from 'react-router-dom'; // Para navegação
import axios from 'axios';

const TwoFAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 60px;
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
  height: 100vh;
  justify-content: center;
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
    height: 80vh;
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

const TwoFA = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Obtém o token do localStorage

    try {
      // Envia o token JWT no cabeçalho da requisição
      const response = await axios.post('https://auth-login-api-v3kt.onrender.com/auth/verify-2fa', {
        twofaCode: code,
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Token JWT enviado no cabeçalho
        }
      });

      setMessage(response.data.msg); // Mensagem de sucesso

      // Armazena o token novamente se necessário (opcional, caso o token seja renovado)
      localStorage.setItem('token', token);

      navigate('/home'); // Redireciona para a página inicial após sucesso
    } catch (error) {
      setMessage(error.response?.data?.msg || 'Erro ao verificar o código. Tente novamente.');
    }
  };

  return (
    <TwoFAWrapper>
      <Banner>
        <h2>Verificação de Dois Fatores 🔐</h2>
        <p>Digite o código enviado para o seu dispositivo para continuar sua jornada.</p>
        <img src="/images/pessoas.png" alt="Verificação 2FA" />
      </Banner>

      <Formulario>
        <h2>Autenticação</h2>
        <p>Estamos quase lá! Por favor, insira o código de verificação abaixo:</p>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Icon><FaKey /></Icon>
            <Input
              type="number"
              placeholder="Código de Verificação"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Verificar</Button>
        </form>
        {message && <p>{message}</p>}
      </Formulario>
    </TwoFAWrapper>
  );
};

export default TwoFA;
