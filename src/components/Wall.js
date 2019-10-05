import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;

  span {
    margin: .4rem 0;
  }

  a {
    color: ${({ theme }) => theme.color.accent.secondary};
  }

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Wall = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Wall.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Wall.defaultProps = {
  children: [],
};

export default Wall;
