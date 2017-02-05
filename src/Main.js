import React from 'react';
import palette from './images/palette.svg';
import './Main.css';
import ColorButtonContainer from './ColorButtonContainer';

const Main = ({color}) => {
    return (
      <div className="Main" style={{backgroundColor: color}}>
        <div>
          <img className="Main-logo" src={palette} alt="palette" />
        </div>
        <div className="Main-header"
             style={{color: ['black','navy','purple'].includes(color) ? 'white' : 'black'}}>
          Color Changer
        </div>
        <ColorButtonContainer />
      </div>
    );
}

export default Main;
