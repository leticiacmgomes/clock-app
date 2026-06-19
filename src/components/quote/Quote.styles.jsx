import {styled} from "styled-components";

export const QuoteContainer = styled.div`
    color: #FFFFFF;
    font-size: 18px;
    display: grid;
    grid-template-columns: 1fr 40px;
    width: 100%;
    row-gap: 1rem;
    line-height: 150%;
    letter-spacing: 0px;
    vertical-align: bottom;
    
    @media screen and (min-width: 768px) {
        max-width:  540px;
    }
`;

export const QuoteAuthor = styled.p`
    font-weight: 700;
`;

