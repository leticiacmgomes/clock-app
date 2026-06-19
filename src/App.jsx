import { useEffect, useState } from "react";

import { useClockStore } from "./store/clockStore";

import { AppContainer } from "./App.styles";

import { Quote } from "./components/quote/Quote";
import { Time } from "./components/time/Time";
import { MoreInfo } from "./components/moreInfo/MoreInfo"

export const App = () => {
  const { fetchTime, fetchQuote, fetchIP, time, isMoreActive } = useClockStore();
  const hour = time ? new Date(time.datetime).getHours() : null;

  useEffect(() => {
    fetchTime();
    fetchQuote();
    fetchIP();
  }, [])

  return (
    <AppContainer $hour={hour}>
      <Quote />
      <Time />
      {isMoreActive && <MoreInfo /> }
    </AppContainer>
  )
}
