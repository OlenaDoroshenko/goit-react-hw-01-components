import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Pangolin", sans-serif;
  font-style: normal;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
}

ul {
    list-style: none;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

table {
  border-collapse: collapse;
}
`;
