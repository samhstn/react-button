import React, { Component } from 'react';

class Button extends Component {
  render () {
    return (
      <button
        style={style}
        className={this.props.color ? 'red' : 'blue'}
        onClick={this.props.handleClick}
      >button {this.props.index}
      </button>
    );
  }
}

export default Button;

const style = {
  display: 'block',
  height: '100px',
  width: '200px',
  fontFamily: 'courier',
  fontSize: '1em'
};
