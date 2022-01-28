import React from "react";
import Inputfield from "./Inputfield";
import Button from "./Button";

const Login = () => {
    return(
        <div>  
        <h1>CRUD OPERATION ON PRODUCTS</h1>
        <h3>Sign Up With Your Account</h3>
        <Inputfield type="number" label=" UserName :" />
        <Inputfield type="number" label=" PassWord :" />
        <Button colour="orange" textcolor="white">LOGIN</Button>
        </div>
    );
};

export default Login;