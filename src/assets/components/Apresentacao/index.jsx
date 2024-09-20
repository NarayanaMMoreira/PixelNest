import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ApresentacaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5rem 0 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 70%
    margin-bottom: 1rem;
  }
`;

const TextBox = styled.div`
  max-width: 700px;
  text-align: left;

  p {
    margin: 0 0 1rem 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 80%;

    p {
      font-size: 0.875rem;
    }
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 16px 40px;
  border-radius: 20px;
  background-color: #ffffff;
  color: var(--primary-color);
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  background-color: var(--primary-color);
  color: var(--primary-color);
  color: #ffffff;

  h2 {
    color: #ffffff !important;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    h2 {
      font size: 3rem;
    }
    p {
      font-size: 1rem;
    }
`;

const InfoImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 70%
  }
`;

const Apresentacao = () => {
  return (
    <ApresentacaoContainer>
      <ContentSection>
        <Image src="/images/menino.png" alt="Menino de capacete espacial" />
        <TextBox>
          <p>
            Explore uma vasta seleção de títulos incríveis, desde clássicos atemporais até as mais recentes novidades do mundo dos games. Cada jogo foi cuidadosamente selecionado para proporcionar a você a melhor experiência. Venha conhecer, jogar e se apaixonar por novos mundos virtuais! 🎮✨
          </p>
          <NavLink to="/galeria">Visite nossa galeria!</NavLink>
        </TextBox>
      </ContentSection>
      <InfoSection>
        <h2>Conheça a seção Educa+</h2>
        <p>
          Aqui você encontrará conteúdos educativos ricos e variados sobre o universo dos jogos e a importância da cibersegurança. Descubra entrevistas com especialistas, artigos informativos, tutoriais práticos e muito mais. Tudo pensado para enriquecer seu conhecimento e tornar sua experiência no mundo dos games ainda mais completa e segura. 🚀📚
        </p>
        <NavLink to="/educa-mais">Saiba mais</NavLink>
        <InfoImage src="/images/criancas.png" alt="Crianças jogando" />
      </InfoSection>
    </ApresentacaoContainer>
  );
};

export default Apresentacao;
