import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  min-width: 250px; 
  width: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  text-align: center;
`;

const GameImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const GameTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 10px 0;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  background-color: var(--secondary-color);
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 12px; 
  font-weight: bold;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff 
  }
`;

const Game = ({ game }) => {
  return (
    <Card>
      <GameImage src={`/games/${game.id}/foto.png`} alt={game.title} />
      <GameTitle>{game.title}</GameTitle>
      <Button to={`/Galeria/${game.title}`}>Descubra mais</Button>
    </Card>
  );
};

export default Game;
