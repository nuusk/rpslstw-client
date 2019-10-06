import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getImage } from '../helpers/images';

const InnerTile = styled.div`
  background-size: cover;
  height: 200px;
  width: 300px;
  border: 4px solid ${({ theme }) => theme.color.palette.charlestonGreen};
  cursor: pointer;
  background: ${({ imageURL }) => `url(${imageURL}) no-repeat center`};
  background-size: cover;
  border-radius: 16px;
  transition: ${({ theme }) => theme.transition.quick};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,.3);
  }
`;

export default class Choice extends Component {
  constructor() {
    super();

    this.state = {
      imageURL: '',
    };
  }

  componentDidMount() {
    const { choice } = this.props;

    this.setState({
      imageURL: getImage(choice),
    });
  }


  render() {
    const { imageURL } = this.state;
    return (
      <InnerTile imageURL={imageURL} />
    );
  }
}

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
};

// export default Choice;
