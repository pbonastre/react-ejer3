import React, { Component } from 'react';
import { render } from 'react-dom';

function Max(props {
  return <h2>Max of 2 and 5 is </h2>
})

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
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
