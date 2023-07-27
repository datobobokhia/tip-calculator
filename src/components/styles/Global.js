import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        background-color: #c5e4e7;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    @media (max-width: 600px) {
        body {
            height: auto;
        }
    }

`;
