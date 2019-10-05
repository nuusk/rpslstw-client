import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Game />
      <GlobalStyle />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
