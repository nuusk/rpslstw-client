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
      ['rock',
        'paper',
        'scizors',
        'lizard',
        'spock',
        'thumb',
        'well']
        .map((item) => (
          <Choice
            choice={item}
            key={item}
            backside={!!currentChoice && currentChoice !== item.slice(0, 2)}
            onClick={() => pickChoice(item.slice(0, 2))}
          />
        ))
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
