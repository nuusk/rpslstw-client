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
`;

const ChoicesTable = ({ pickChoice, ...rest }) => (
  <Wrapper {...rest}>
    <Choice choice="rock" onClick={() => pickChoice('rock')} />
    <Choice choice="paper" onClick={() => pickChoice('paper')} />
    <Choice choice="scizors" onClick={() => pickChoice('scizors')} />
    <Choice choice="lizard" onClick={() => pickChoice('lizard')} />
    <Choice choice="spock" onClick={() => pickChoice('spock')} />
    <Choice choice="thumb" onClick={() => pickChoice('thumb')} />
    <Choice choice="well" onClick={() => pickChoice('well')} />
  </Wrapper>
);

ChoicesTable.propTypes = {
  pickChoice: PropTypes.func.isRequired,
};

export default ChoicesTable;
