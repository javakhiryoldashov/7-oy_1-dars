import React, { useReducer } from 'react';
import './App.css';
import BgColorSwitcher from './BgColorSwitcher';

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_RED':
      return { ...state, red: Math.min(state.red + 10, 255) };
    case 'DECREMENT_RED':
      return { ...state, red: Math.max(state.red - 10, 0) };
    case 'INCREMENT_GREEN':
      return { ...state, green: Math.min(state.green + 10, 255) };
    case 'DECREMENT_GREEN':
      return { ...state, green: Math.max(state.green - 10, 0) };
    case 'INCREMENT_BLUE':
      return { ...state, blue: Math.min(state.blue + 10, 255) };
    case 'DECREMENT_BLUE':
      return { ...state, blue: Math.max(state.blue - 10, 0) };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <BgColorSwitcher state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
