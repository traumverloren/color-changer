import React, { Component } from 'react';
import rainbow from './images/cute_rainbow.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color Changer</h1>
        <img src={rainbow} alt="rainbow" />
      </div>
    );
  }
}

export default App;
