import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const RequirementsText = styled.p`
  font-size: 12px;
  color: #666;
`;

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    // Formata a data de nascimento no formato AAAA-MM-DD
    const formattedBirthdate = birthdate.split('T')[0];

    try {
      const response = await axios.post('https://auth-login-api-v3kt.onrender.com/auth/register', {
        name,
        username,
        email,
        birthdate: formattedBirthdate, // Agora corretamente formatada
        gender,
        password
      });

      setMessage(response.data.msg);
    } catch (error) {
      console.error('Erro:', error);
      console.error('Dados da requisição:', {
        name,
        username,
        email,
        birthdate: formattedBirthdate,
        gender,
        password
      });
      if (error.response) {
        setMessage(error.response.data.msg);
      } else {
        setMessage('Erro ao cadastrar usuário');
      }
    }
  };

  return (
    <SignupWrapper>
      <FormContainer>
        <h2>Cadastro</h2>
        <form onSubmit={handleSignup}>
          <InputWrapper>
            <Label htmlFor="name">Nome <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="username">Nome de Usuário <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="username"
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="birthdate">Data de Nascimento <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="gender">Gênero <span style={{ color: 'red' }}>*</span></Label>
            <Select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Selecione o Gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="prefiro não identificar">Prefiro não identificar</option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Senha <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RequirementsText>
              A senha deve ter pelo menos 10 caracteres, 1 letra maiúscula, 1 caractere especial e 1 número.
            </RequirementsText>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="confirmPassword">Confirme a Senha <span style={{ color: 'red' }}>*</span></Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirme a Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Cadastrar</Button>
        </form>
        {message && <p>{message}</p>}
      </FormContainer>
    </SignupWrapper>
  );
};

export default RegisterPage;
