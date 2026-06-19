import { useClockStore } from "../../store/clockStore";
import { QuoteAuthor, QuoteContainer } from "./Quote.styles";

import iconRefresh from "../../assets/desktop/icon-refresh.svg";

export const Quote = () => {
  const { quote, isMoreActive, fetchQuote } = useClockStore();

  return (
    <QuoteContainer>
      {quote && !isMoreActive && (
        <>
          <p>{quote?.content}</p>
          <img src={iconRefresh} alt="Refresh" onClick={fetchQuote} />
          <QuoteAuthor>{quote?.originator?.name}</QuoteAuthor>
        </>
      )}
    </QuoteContainer>
  );
};
