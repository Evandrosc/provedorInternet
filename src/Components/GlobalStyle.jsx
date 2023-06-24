import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    border: none;
    outline: none;
}

body {
  max-width: 1420px;
  margin: 0 auto;
}
`
export default GlobalStyle;