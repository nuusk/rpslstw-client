import React from 'react';
import { SocialIcon } from 'react-social-icons';
import theme from '../styles/theme';

const CustomNavLink = ({ ...rest }) => (
  <SocialIcon
    {...rest}
    bgColor={theme.color.palette.charlestonGreen}
    style={{ height: 30, width: 30 }}
    target="_blank"
    rel="noopener noreferrer"
  />
);

export default CustomNavLink;
