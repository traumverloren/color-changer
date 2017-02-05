import React, { Component } from 'react';
import palette from './images/palette.svg';
import './App.css';
import ColorButtonContainer from './ColorButtonContainer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'white'}}>
        <div>
          <img className="App-logo" src={palette} alt="palette" />
        </div>
        <div className="App-header">Color Changer</div>
        <ColorButtonContainer />
      </div>
    );
  }
}

export default App;
