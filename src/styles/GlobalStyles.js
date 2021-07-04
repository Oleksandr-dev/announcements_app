import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.$background};
        font-family: ${({ theme }) => theme.$mainFont};
        font-size: 15px;
        color: ${({ theme }) => theme.$textGray};
    }

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    p {
        margin: 0;
    }

    body {
        margin: 0;
    }

    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        margin: 0; 
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }
`;
