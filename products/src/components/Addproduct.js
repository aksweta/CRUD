import React, { useState } from "react";
import Inputfield from "./Inputfield.js";
import Button from "./Button";
// import Table from "./Table.js";

const Addproduct = () => {
  const [product, setProduct] = useState({
    ID: "",
    Category: "",
    Name: "",
    Description: "",
    Price: "",
    ShippingCharge: "",
  });

  const handletext = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    const newObj = { ...product };
    newObj[name] = value;
    setProduct(newObj);
  };

  const handlesubmit = () => {
    console.log("Product:", product);
  };

 

  return (
    <div>
      <h1>ADD PRODUCTS</h1>
      <Inputfield
        type="number"
        label=" ID :"
        name="ID"
        defaultValue={product.ID}
        onchange={handletext}
      />
      <Inputfield
        type="text"
        label=" Category :"
        name="Category"
        defaultValue={product.Category}
        onchange={handletext}
      />
      <Inputfield
        type="text"
        label=" Name :"
        name="Name"
        defaultValue={product.Name}
        onchange={handletext}
      />
      <Inputfield
        type="text"
        label=" Description :"
        name="Description"
        defaultValue={product.Description}
        onchange={handletext}
      />
      <Inputfield
        type="number"
        label=" Price :"
        name="Price"
        defaultValue={product.Price}
        onchange={handletext}
      />
      <Inputfield
        type="number"
        label=" Shipping Charge :"
        name="ShippingCharge"
        defaultValue={product.ShippingCharge}
        onchange={handletext}
      />
      <Button colour="firebrick" textcolor="white" onClick={handlesubmit}>
        Submit On Board
      </Button>

      
    </div>
  );
};

export default Addproduct;
