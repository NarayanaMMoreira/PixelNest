import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: 12rem 10rem;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    height: 85vh;

    img {
      display: none;
    }
  }
`;

const BannerImage = styled.img`
  max-width: 20%;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  text-align: center;
  width: 80%;
  color: #ffffff;

  h1 {
    font-size: 5.625rem;
    color: #ffffff;
    margin: -1rem 0 0 0;
  }

  h2 {
    font-size: 1.875rem;
    margin: 0;
    color: #ffffff;
  }

  p {
    font-size: 1.0625rem;
    max-width: 85%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    padding: 80px 0;

    h1 {
      font-size: 3rem;
      margin: 0;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0 0 -0.8rem 0;
    }

    p {
      font-size: 0.875rem;
      margin: 0;
    }
  }
`;


const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="/images/Menina.png" alt="Robo" />
      <TextBox>
        <h2>Bem-vindo a</h2>
        <h1>PixelNest!</h1>
        <p>Mergulhe em uma jornada envolvente através dos corredores da nossa galeria virtual e descubra a magia dos jogos!</p>
      </TextBox>
      <BannerImage src="/images/Robo.png" alt="Menina" />
    </BannerContainer>
  );
};

export default Banner;
