import React, { useState } from "react";
import Inputfield from "./Inputfield";
import Button from "./Button";
import Addproduct from "./Addproduct";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAddProductDisplay, setIsAddProductDisplay] = useState(false);

  const loginhandle = () => {
    if (username === "sweta" && password === "12345") {
      console.log("login done");
      setMessage("login sucessfully");
      setIsAddProductDisplay(true);
    } else {
      setMessage("login failed");
      setIsAddProductDisplay(false);
    }
  };

  return (
    <div>
      {isAddProductDisplay ? (
        <Addproduct />
      ) : (
        <>
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

          {message}
        </>
      )}
    </div>
  );
};

export default Login;
