import React from 'react';
import Inputfield from './components/Inputfield.js';
import './App.css';
import Button from './components/Button.js';


function App() {
  return (
        <div>
          <h1>CRUD PRODUCTS</h1>
        <Inputfield type="number" label=" UserName :" />
        <Inputfield type="number" label=" PassWord :" />
        
        <Button colour="orange" textcolor="white">LOGIN</Button>

        <h1>ADD PRODUCTS</h1>
        <Inputfield type="number" label=" ID :" />
        <Inputfield type="number" label=" Category :" />
        <Inputfield type="number" label=" Name :" />
        <Inputfield type="number" label=" Description :" />
        <Inputfield type="number" label=" Price :" />
        <Inputfield type="number" label=" Shipping Charge :" />
        <Button colour="orange" textcolor="white">Submit On Board</Button>
        
        </div>
  );
}

export default App;
