import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import artigos from "../../json/artigos.json";


const PageContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  align-items: center;
`;

const Banner = styled.div`
  text-align: center;
  width: 100%;
  height: 70vh; 
  background-color: var(--primary-color);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;

  @media (max-width: 768px) {
    height: 50vh; 
  }
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 30px 0 0 0;
  font-size: 2.5rem;
  width: 70%;

  @media (max-width: 768px) {
    font-size: 1.8rem; 
    width: 90%;
  }
`;

const Resumo = styled.p`
  font-style: italic;
  color: #fff;
  width: 60%;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem; 
    width: 85%;
  }
`;

const Data = styled.p`
  color: #ffffff;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem; 
  }
`;

const Paragrafo = styled.div`
  display: flex; 
  justify-content: center; 
  width: 100%;
  margin: 0 auto; 
  line-height: 1.8rem;
  
  p {
    color: #000000;
    text-align: justify;
    width: 80%;
    margin: 0; 
  }
`;

const Titulo = styled.div`
  display: flex; 
  justify-content: center; 
  width: 100%;
  margin: 0 auto; 

  h2 {
    text-align: center;
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Table = styled.table`
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--secondary-color);

  thead {
    background-color: var(--primary-color);
    color: white;
  }

  th, td {
    border: 1px solid var(--primary-color);
    padding: 8px;
    text-align: center;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const ArtigoPage = () => {
    const { id } = useParams();
    const artigo = artigos.find((artigo) => artigo.id === id);

    if (!artigo) {
        return <p>Artigo não encontrado</p>;
    }

    // Extrair os nomes das colunas e os dados
    const colunas = Object.keys(artigo.tabela[0] || {});
    const dados = artigo.tabela || [];

    return(    
      <PageContainer>
        <Banner>
            <Title>{artigo.title}</Title>
            <Resumo>{artigo.resumo}</Resumo>
            <Data>{artigo.data}</Data>
        </Banner>
        <Paragrafo><p>{artigo.paragrafo_introdutorio}</p></Paragrafo>
        <Titulo><h2>{artigo.titulo_2}</h2></Titulo>
        <Table>
          <thead>
            <tr>
              {colunas.map((coluna, index) => (
                <th key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, index) => (
              <tr key={index}>
                {colunas.map((coluna, colIndex) => (
                  <td key={colIndex}>{linha[coluna]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Paragrafo><p>{artigo.paragrafo}</p></Paragrafo>
        <Titulo><h2>{artigo.titulo_3}</h2></Titulo>
        <Paragrafo><p>{artigo.paragrafo_conclusao}</p></Paragrafo>
      </PageContainer>
    )
}

export default ArtigoPage;
