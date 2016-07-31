import React from 'react';
import ReactDOM from 'react-dom';

class Comp extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Comp />,
  document.getElementById('container')
);
