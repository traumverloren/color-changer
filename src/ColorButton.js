import React from 'react';

const ColorButton = ({submitColor, color}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.blur();
    const color = e.target.color.value;
    submitColor(color);
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{color: ['black','navy','purple'].includes(color) ? 'white' : 'black'}}><label>Enter a color name (e.g. white, teal): </label></div>
        <div style={{margin: '10px', textAlign: 'center'}}>
          <input type='text' name='color'/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ColorButton
