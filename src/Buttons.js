import React, { Component } from 'react';

import Button from './Button.js';

const n = 4;

class Buttons extends Component {
  componentWillMount () {
    this.setState({
      buttons: '.'.repeat(n).split('').map(() => false)
    });
  }

  handleClick (i) {
    const { buttons } = this.state;
    this.setState({
      buttons: [
        ...buttons.slice(0, i),
        !buttons[i],
        ...buttons.slice(i + 1, buttons.length)
      ]
    });
  }

  render () {
    return (
      <div>
        {
          '.'.repeat(n).split('').map((_, i) => {
            return (
              <Button
                key={i}
                index={i}
                color={this.state.buttons[i]}
                handleClick={this.handleClick.bind(this, i)}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Buttons;
