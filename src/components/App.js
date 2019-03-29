import React, { Component } from 'react';
import './App.css';
import Counter from '../containers/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>React Redux Testing</h3>
        <i>Hello Redux - Simple Counter</i>
        <Counter />
      </div>
    );
  }
}

export default App;
