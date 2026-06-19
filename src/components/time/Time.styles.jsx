import { styled } from "styled-components";

import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 64px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
`;

export const Greeting = styled.span`
  padding-left: 30px;
  background: ${({ $hour }) =>
      $hour < 18 ? `url("${iconSun}")` : `url("${iconMoon}")`}
    no-repeat left center;
  font-size: 20px;
  text-transform: uppercase;
  display: flex;
`;

export const AdditionalText = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const CurrentTime = styled.span`
  font-size: 100px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
`;

export const Location = styled.span`
  font-size: 15px;
  font-weight: 700;
 
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
