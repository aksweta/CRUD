import React, { useState, useEffect } from "react";
import Inputfield from "./Inputfield";
import Button from "./Button";
import Addproduct from "./Addproduct";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAddProductDisplay, setIsAddProductDisplay] = useState(false);

  useEffect(() => {
    localStorage.getItem("isUserLoggedIn") &&
      setIsAddProductDisplay(localStorage.getItem("isUserLoggedIn"));
  }, []);

  const loginhandle = () => {
    if (username === "sweta" && password === "12345") {
      console.log("login done");
      setMessage("login sucessfully");
      localStorage.setItem("isUserLoggedIn", true);
    } else {
      setMessage("login failed");
      //  setIsAddProductDisplay(false);
    }
  };

  return (
    <div className="login">
      {isAddProductDisplay ? (
        <Addproduct />
      ) : (
        <>
          <h1>CRUD OPERATION ON PRODUCTS</h1>
          <br />
          <h3>Sign Up With Your Account</h3>
          <br />
          <Inputfield
            type="text"
            name="username"
            label=" UserName :"
            onchange={(e) => setUsername(e.target.value)}
          />
          <Inputfield
            type="number"
            name="password"
            label=" PassWord :"
            onchange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button colour="firebrick" textcolor="white" onClick={loginhandle}>
            LOGIN
          </Button>
          <br />
          {message}
        </>
      )}
    </div>
  );
};

export default Login;
