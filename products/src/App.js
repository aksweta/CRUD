import React from "react";
import Inputfield from "./components/Inputfield.js";
import "./App.css";
import Button from "./components/Button.js";
import Login from "./components/Login.js";
import Addproduct from "./components/Addproduct.js";

function App() {
  return (
    <div>
      <Login />
      <Addproduct />
    </div>
  );
}

export default App;
