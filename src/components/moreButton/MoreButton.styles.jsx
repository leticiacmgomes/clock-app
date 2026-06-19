import { styled } from "styled-components";

import iconArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import iconArrowUp from "../../assets/desktop/icon-arrow-up.svg";

export const MoreButtonContainer = styled.div`
  width: 143px;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 999px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #000000;
  cursor: pointer;
`;

export const IconArrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $isMoreActive }) =>
      $isMoreActive ? `url("${iconArrowUp}")` : `url("${iconArrowDown}")`}
    no-repeat center #303030;
    
`;
