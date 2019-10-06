import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  getLizardImage, getPaperImage, getRockImage, getScizorsImage, getSpockImage, getThumbImage, getWellImage,
} from '../helpers/images';

const InnerTile = styled.div`
  background-color: ${({ theme }) => theme.color.palette.isabelline};
  background-size: cover;
  height: 100px;
  width: 120px;
  border: 2px solid ${({ theme }) => theme.color.palette.vistaBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.palette.vistaBlue};

  strong {
    font-size: ${({ theme }) => theme.font.size.heading.secondary};
    color: ${({ theme }) => theme.color.palette.moonstoneBlue};
  }
`;

const Wrapper = styled.div`
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  transition: ${({ theme }) => theme.transition.quick};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,.3);
  }
`;

const Choice = ({ imageURL, ...rest }) => (
  <Wrapper>
    <InnerTile imageURL={imageURL} {...rest} />
  </Wrapper>
);

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Choice;
