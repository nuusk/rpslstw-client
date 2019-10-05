import React from 'react';
import styled, { css } from 'styled-components';
import CustomSocialIcon from './CustomSocialIcon';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  border-top: 1px solid ${({ theme }) => theme.color.palette.eerieBlack};

  & > * {
    flex: 1;
  }
`;

const LinkWrapper = styled.div`
  color: ${({ theme }) => theme.color.palette.eerieBlack};
  display: flex;
  align-items: center;

  ${({ left }) => left && css`
    justify-content: flex-start;
  `}

  ${({ right }) => right && css`
    justify-content: flex-end;
  `}

  ${({ center }) => center && css`
    justify-content: center;
  `}

  & > div {
    margin: 0 1rem;
  }
`;

const AppFooter = ({ ...rest }) => (
  <Wrapper {...rest}>
    <LinkWrapper left>
    </LinkWrapper>
    <LinkWrapper center>
      <span>&copy; 2019 PUT</span>
    </LinkWrapper>
    <LinkWrapper right>
      <CustomSocialIcon url="https://www.github.com/pietersweter/rpslstw-client" />
    </LinkWrapper>
  </Wrapper>
);

export default AppFooter;
