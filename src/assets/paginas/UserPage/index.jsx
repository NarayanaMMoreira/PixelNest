import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaEnvelope, FaBirthdayCake, FaVenusMars } from 'react-icons/fa'; // Ícones para o perfil
import { useNavigate } from 'react-router-dom';

// Estilos
const ProfileWrapper = styled.div`
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

const ProfileDetails = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 0;

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

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthDate: '',
    gender: '',
  });
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Função para buscar dados do usuário da API
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://auth-login-api-v3kt.onrender.com/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setMessage('Erro ao buscar dados do usuário.');
      }
    };

    fetchUserData();
  }, []);

  return (
    <ProfileWrapper>
      <Banner>
        <h2>Perfil do Usuário</h2>
        <p>Aqui estão suas informações pessoais.</p>
        <img src="/images/pessoas.png" alt="Mulher e homem sentados" />
      </Banner>

      <ProfileDetails>
        <h2>Seus Dados</h2>
        <form>
          <InputWrapper>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              value={userData.name}
              readOnly
              placeholder="Nome"
            />
          </InputWrapper>
          <InputWrapper>
            <Icon><FaEnvelope /></Icon>
            <Input
              type="email"
              value={userData.email}
              readOnly
              placeholder="Email"
            />
          </InputWrapper>
          <InputWrapper>
            <Icon><FaBirthdayCake /></Icon>
            <Input
              type="text"
              value={userData.birthDate}
              readOnly
              placeholder="Data de Nascimento"
            />
          </InputWrapper>
          <InputWrapper>
            <Icon><FaVenusMars /></Icon>
            <Input
              type="text"
              value={userData.gender}
              readOnly
              placeholder="Gênero"
            />
          </InputWrapper>
          <Button onClick={() => navigate('/editar-perfil')}>Editar Perfil</Button>
        </form>
        {message && <p>{message}</p>}
      </ProfileDetails>
    </ProfileWrapper>
  );
};

export default UserProfile;
