import React, { useState } from "react";
import Inputfield from "./Inputfield";
import Button from "./Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginhandle = () => {
    if (username === "sweta" && password === "12345") {
      console.log("login done");
      setMessage("login sucessfully");
    } else {
      setMessage("login faied");
    }
  };

  return (
    <div>
      <h1>CRUD OPERATION ON PRODUCTS</h1>
      <h3>Sign Up With Your Account</h3>
      <Inputfield
        type="text"
        name="username"
        label=" UserName :"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Inputfield
        type="number"
        name="password"
        label=" PassWord :"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colour="orange" textcolor="white" onClick={loginhandle}>
        LOGIN
      </Button>
    </div>
  );
};

export default Login;
