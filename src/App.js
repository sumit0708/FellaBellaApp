import React from 'react';
import './App.css';
import Flexi from './flexi';

import flexiConfig from './constants'

function App() {
  
  return (
    <div className="App">
      <Flexi config = {flexiConfig}/>
    </div>
  );
}

export default App;
