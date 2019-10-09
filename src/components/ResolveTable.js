import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Choice from './Choice';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    justify-self: flex-end;
  }

  div {
    text-align: center;
  }

  strong {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.color.palette.charlestonGreen};
    font-size: ${({ theme }) => theme.font.size.heading.secondary};
  }
`;

const ResolveTable = ({ yourMove, enemyMove, ...rest }) => (
  <Wrapper {...rest}>
    <div>
      <strong>you chose</strong>
      <Choice
        choice={yourMove}
      />
    </div>
    <div>
      <strong>enemy chose</strong>
      <Choice
        choice={enemyMove}
      />
    </div>
  </Wrapper>
);

ResolveTable.propTypes = {
  yourMove: PropTypes.string.isRequired,
  enemyMove: PropTypes.string.isRequired,
};

export default ResolveTable;
