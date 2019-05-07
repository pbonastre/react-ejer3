import React, { Component } from 'react';
import { render } from 'react-dom';

const Hello = (props) => <h2>Bievenido a React </h2>
function Max(props) {
  return <h2>Max of 2 and 5 is </h2>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name='Susan'/>
        <Max />
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
