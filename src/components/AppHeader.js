import React from 'react';
import styled, { css } from 'styled-components';
import AppLogo from './AppLogo';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  
  img { 
    margin: 0 auto;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  ${({ left }) => left && css`
    justify-content: flex-start;
  `}

  ${({ right }) => right && css`
    justify-content: flex-end;
  `}

   {
    margin: 1rem;
  }

  & > div {
    margin: 0 1rem;
  }
`;

const AppHeader = ({ ...rest }) => (
  <Wrapper {...rest}>
    <LinkWrapper left />
    <AppLogo />
    <LinkWrapper right />
  </Wrapper>
);

export default AppHeader;
