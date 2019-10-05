import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
`;

const InnerRect = styled.div`
  position: absolute;
  display: block;
  content: '';
  height: 60px;
  width: 60px;
  border: 10px solid ${({ theme }) => theme.color.palette.moonstoneBlue};
  animation: spin 1.5s infinite;
  left: -50%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  display: block;
  content: '';
  height: 20px;
  width: 20px;
  border-radius: 20%;
  border: 10px solid ${({ theme }) => theme.color.palette.lavenderGray};
  animation: spin-reverse 3s infinite;
  top: 50%;

  @keyframes spin-reverse {
    0% {
      border-radius: 20%;
      transform: rotate(360deg);
    }
    50% {
      border-radius: 50%;
      transform: rotate(180deg);
    }
    100% {
      border-radius: 20%;
      transform: rotate(0deg);
    }
  }
`;

const Loader = () => (
  <Outer>
    <InnerRect />
    <InnerCircle />
  </Outer>
);

export default Loader;
