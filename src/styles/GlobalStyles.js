import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  ${styledNormalize}

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  body {
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.font.family.base};
    font-weight: ${({ theme }) => theme.font.weight.base};
  }

  header, main, footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  main {
    flex: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color.text.primary};
    line-height: ${({ theme }) => theme.font.lineHeight.heading};
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.heading.primary};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.heading.secondary};
  }

  p {
    line-height: ${({ theme }) => theme.font.lineHeight.text}; 
    color: ${({ theme }) => theme.color.text.primary};
    margin: 1em 0 1.5em;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    line-height: inherit;
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
    color: inherit;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  // reset autofill styles
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
    font-family: ${({ theme }) => theme.font.family.base};
    font-weight: ${({ theme }) => theme.font.weight.base};
  }
`;

export default GlobalStyle;
