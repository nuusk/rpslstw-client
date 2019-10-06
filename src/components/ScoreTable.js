import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  min-width: 100px;
  padding: .2rem 1rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
  letter-spacing: 2px;
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.text};
  transition: ${({ theme }) => theme.transition.quick};
`;

const Points = styled.div`
  margin: 0 1rem;
  font-weight: bold;
  
  span {
    font-size: 16px;
  }
  
  strong {
    font-size: 22px;
    margin-left: .3rem;
  }

  ${({ you }) => you
    && css`
    color: ${({ theme }) => theme.color.accent.secondary};
  `}
  
  ${({ enemy }) => enemy
    && css`
    color: ${({ theme }) => theme.color.accent.error};
  `}
`;

const ScoreTable = ({ you, enemy, ...rest }) => (
  <Wrapper {...rest}>
    <Points you>
      <span>you:</span>
      <strong>{you}</strong>
    </Points>
    <Points enemy>
      <span>enemy:</span>
      <strong>{enemy}</strong>
    </Points>
  </Wrapper>
);

ScoreTable.propTypes = {
  you: PropTypes.number,
  enemy: PropTypes.number,
};

ScoreTable.defaultProps = {
  you: 0,
  enemy: 0,
};

export default ScoreTable;
