import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield.js';

function App() {
  return (
    <div>
      <Inputfield type="number" label="ProductID :" />
      <Inputfield type="text" label="Category :" />
      <Inputfield type="text" label="ProductName :" />
      <Inputfield type="number" label="Price :" />
    </div>
  );
}

export default App;
