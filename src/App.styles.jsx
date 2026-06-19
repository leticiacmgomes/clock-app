import { styled } from "styled-components";

import bgDayMobile from "./assets/mobile/bg-image-daytime.jpg";
import bgNightMobile from "./assets/mobile/bg-image-nighttime.jpg";
import bgDayTablet from "./assets/tablet/bg-image-daytime.jpg";
import bgNightTablet from "./assets/tablet/bg-image-nighttime.jpg";
import bgDayDesktop from "./assets/desktop/bg-image-daytime.jpg";
import bgNightDesktop from "./assets/desktop/bg-image-nighttime.jpg";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 80px 16px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), ${({ $hour }) =>
      $hour < 18 ? `url("${bgDayMobile}")` : `url("${bgNightMobile}")`}
    no-repeat fixed;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), ${({ $hour }) =>
      $hour < 18 ? `url("${bgDayTablet}")` : `url("${bgNightTablet}")`};
    background-size: cover;
    padding: 64px;
  }

  @media screen and (min-width: 1440px) {
    background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), ${({ $hour }) =>
      $hour < 18 ? `url("${bgDayDesktop}")` : `url("${bgNightDesktop}")`};
    background-size: cover;
    padding: 64px 165px;
  }
`;
