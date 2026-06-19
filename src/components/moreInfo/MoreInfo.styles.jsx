import { styled } from "styled-components";

export const MoreInfoContainer = styled.div`
  background: #ffffffbf;
  backdrop-filter: blur(40.774227142333984px);
  height: 240px;
  padding: 48px 16px;
  margin: 0px -16px -80px -16px;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template: repeat(2, auto) / repeat(2, auto);
    justify-content: center;
    align-content: center;
    margin: -64px;
    column-gap: 80px;
    row-gap: 40px;
    height: 430px;
    grid-auto-flow: column;
  }

  
  @media screen and (min-width: 1200px) {
    margin: -64px -165px;
    height: 250px;
  }

  @media screen and (min-width: 1440px) {
    margin: -64px -165px;
    height: 400px;
  }
`;

export const InfoContainer = styled.div`
  color: #303030;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;

export const InfoLabel = styled.p`
  font-size: 10px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const InfoText = styled.p`
  font-size: 20px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 56px;
  }
`;
