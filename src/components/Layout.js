import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  ${({ columned }) => columned
    && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `}

  ${({ narrow }) => narrow
    && css`
    max-width: ${({ theme }) => theme.screen.narrow};
  `}
`;

const Layout = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Content {...rest}>
      <AppHeader />
      <main>
        {children}
      </main>
      <AppFooter />
    </Content>
  </Wrapper>
);

Layout.propTypes = {
  columned: PropTypes.bool,
  narrow: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Layout.defaultProps = {
  columned: false,
  narrow: false,
  children: [],
};

export default Layout;
