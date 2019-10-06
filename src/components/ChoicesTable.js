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

const ChoicesTable = ({ pickChoice, currentChoice, ...rest }) => (
  <Wrapper {...rest}>
    {
      currentChoice
        ? <Choice choice={currentChoice} />
        : (
          <>
            <Choice choice="rock" onClick={() => pickChoice('ro')} />
            <Choice choice="paper" onClick={() => pickChoice('pa')} />
            <Choice choice="scizors" onClick={() => pickChoice('sc')} />
            <Choice choice="lizard" onClick={() => pickChoice('li')} />
            <Choice choice="spock" onClick={() => pickChoice('sp')} />
            <Choice choice="thumb" onClick={() => pickChoice('th')} />
            <Choice choice="well" onClick={() => pickChoice('we')} />
          </>
        )
    }
  </Wrapper>
);

ChoicesTable.propTypes = {
  pickChoice: PropTypes.func.isRequired,
  currentChoice: PropTypes.string,
};

ChoicesTable.defaultProps = {
  currentChoice: '',
};

export default ChoicesTable;
