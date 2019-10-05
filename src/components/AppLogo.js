import React from 'react';
import styled from 'styled-components';
import Letter from './Letter';

const Wrapper = styled.div`
  display: block;
  font-size: 50px;
  letter-spacing: 10px;
`;

const AppLogo = () => (
  <Wrapper>
    {'rpslstw'.split('').map((letter, index) => <Letter key={letter + '-' + index}>{letter}</Letter>)}
  </Wrapper>
);

export default AppLogo;
