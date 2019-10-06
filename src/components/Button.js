import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 100px;
  font-size: 18px;
  padding: .2rem 1rem;
  margin: 1rem 0;
  letter-spacing: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.palette.platinum};
  transition: ${({ theme }) => theme.transition.quick};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.accent.secondary};
  }
`;

const Button = ({ children, onClick, ...rest }) => (
  <Wrapper onClick={onClick} {...rest}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: [],
  onClick: () => false,
};

export default Button;
