import React from 'react';
import './App.css';
import { Home } from './pages/index';
import NestedComm from './logic/nestedDatalogic';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <NestedComm />
    </div>
  );
}

export default App;
