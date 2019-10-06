import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 80px;
`;

const Gallery = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
);

Gallery.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Gallery.defaultProps = {
  children: [],
};

export default Gallery;
