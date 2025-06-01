// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Roboto, sans-serif;
    background-color: ${colors.light};
    color: ${colors.black};
    line-height: 1.6;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;