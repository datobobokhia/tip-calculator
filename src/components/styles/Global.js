import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #c5e4e7;
    }
    @media (min-width: 601px) {
    html, body {
        overflow: hidden;
    }
  }
`;
