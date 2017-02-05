import React from 'react';

const ColorButton = ({submitColor}) => {
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
        <div><label>Enter a color name (e.g. white, perwinkle): </label></div>
        <div style={{margin: '10px', textAlign: 'center'}}>
          <input type='text' name='color'/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ColorButton
