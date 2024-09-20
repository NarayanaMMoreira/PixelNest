import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

const ArtigoImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ArtigoTitle = styled.h3`
  font-size: 20px;
  width: 80%;
  font-weight: bold;
  color: var(--primary-color);
  margin: 10px 0;
`;

const Resumo = styled.div`
width: 80%;
 
 p{
  font-size: 1rem;
  text-align: left;
 }
`

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

const Artigo = ({ artigo }) => {
  return (
    <Card>
      <ArtigoImage src={`/artigos/${artigo.id}/foto.png`} alt={artigo.title} />
      <ArtigoTitle>{artigo.title}</ArtigoTitle>
      <Resumo><p>{artigo.resumo}</p></Resumo>
      <Button to={`/educa-mais/${artigo.id}`}>Descubra mais</Button>
    </Card>
  );
};

export default Artigo;
