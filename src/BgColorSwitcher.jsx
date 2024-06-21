import React from 'react';

const BgColorSwitcher = ({ state, dispatch }) => {
  const { red, green, blue } = state;
  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="bg-switcher" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h1>BgColor Switcher</h1>
        <div className="color-control">
          <div>
            <label>Red:</label>
            <button onClick={() => dispatch({ type: 'INCREMENT_RED' })}>+</button>
            <span>{red}</span>
            <button onClick={() => dispatch({ type: 'DECREMENT_RED' })}>-</button>
          </div>
          <div>
            <label>Green:</label>
            <button onClick={() => dispatch({ type: 'INCREMENT_GREEN' })}>+</button>
            <span>{green}</span>
            <button onClick={() => dispatch({ type: 'DECREMENT_GREEN' })}>-</button>
          </div>
          <div>
            <label>Blue:</label>
            <button onClick={() => dispatch({ type: 'INCREMENT_BLUE' })}>+</button>
            <span>{blue}</span>
            <button onClick={() => dispatch({ type: 'DECREMENT_BLUE' })}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgColorSwitcher;
