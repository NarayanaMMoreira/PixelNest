import React, { useState } from 'react';
import styled from 'styled-components';
import artigos from "../../json/artigos.json"; 
import Artigo from '../../components/Artigo';

// Styled components
const EducaMaisContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const InicioContainer = styled.div`
  padding: 6rem;
  box-sizing: border-box;
  background-color: var(--primary-color);

  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
  font-style: italic;
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

const ArtigoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 100px;
  list-style-type: none;
  padding: 5rem;
  box-sizing: border-box;
  justify-content: center;
`;

const ArtigoItem = styled.li`
  display: flex;
  justify-content: center;
`;


const EducaMais = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtigos = artigos.filter((artigo) =>
    artigo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <EducaMaisContainer>
      <InicioContainer>
        <Title>Educa+</Title>
        <Subtitle>
          Descubra os benefícios dos jogos e muito+! A PixelNest é um projeto apaixonado que explora a rica história e relevância dos videogames em nossas vidas. Nosso objetivo é destacar a diversidade, a cultura e o impacto positivo que os jogos têm na sociedade, proporcionando uma experiência educativa e envolvente.
        </Subtitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Pesquisar artigos..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </SearchContainer>
      </InicioContainer>
      
      <ArtigoList>
        {filteredArtigos.map((artigo) => (
          <ArtigoItem key={artigo.id}>
            <Artigo artigo={artigo} />
          </ArtigoItem>
        ))}
      </ArtigoList>
    </EducaMaisContainer>
  );
};

export default EducaMais;
