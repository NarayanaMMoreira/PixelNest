import React, { useState } from 'react';
import styled from 'styled-components';
import games from '../../json/games.json'; 
import Game from '../../components/Game';

// Styled components
const GaleriaContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const InicioContainer = styled.div `
  padding: 6rem;
  box-sizing: border-box;
  background-color: var(--primary-color);

`
const Title = styled.h1`
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 10px;
  outline: none;
`;


const GameList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 100px;
  list-style-type: none;
  padding: 5rem;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const GameItem = styled.li`
  display: flex;
  justify-content: center;
`;

const Galeria = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <GaleriaContainer>
      <InicioContainer>
        <Title>Explore o universo fantástico dos jogos!</Title>
        <Subtitle>Descubra a história, curiosidades e muito mais sobre os jogos do nosso museu geek!</Subtitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Pesquisar jogos..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </SearchContainer>
      </InicioContainer>
      
      <GameList>
        {filteredGames.map((game) => (
          <GameItem key={game.id}>
            <Game game={game} />
          </GameItem>
        ))}
      </GameList>
    </GaleriaContainer>
  );
};

export default Galeria;
