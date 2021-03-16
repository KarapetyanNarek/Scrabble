import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  * {
    box-sizing: border-box;
    list-style: none;
    padding-inline-start: 0;
  }
`;
