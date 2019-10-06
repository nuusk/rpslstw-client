import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { seconds } from '../helpers/time';

const colors = [
  '#C0B9DD',
  '#80A1D4',
  '#75C9C8',
  '#2D2C2D',
];

const TICK_SPEED = seconds(0.12);

const getRandomColor = () => colors[Math.floor(colors.length * Math.random(1))];

export default class Letter extends Component {
  constructor() {
    super();

    this.state = {
      stabilizeColor: seconds(Math.ceil(5 * Math.random(1))),
      color: getRandomColor(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.tickInterval = setInterval(() => {
      this.tick();
    }, TICK_SPEED);
  }

  tick() {
    const { stabilizeColor } = this.state;

    this.setState({
      stabilizeColor: stabilizeColor - TICK_SPEED,
      color: getRandomColor(),
    }, () => {
      if (stabilizeColor <= seconds(1)) {
        clearInterval(this.tickInterval);
      }
    });
  }

  render() {
    const { children } = this.props;
    const { color } = this.state;

    return (
      <span style={{ color }}>
        {children}
      </span>
    );
  }
}

Letter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Letter.defaultProps = {
  children: [],
};
