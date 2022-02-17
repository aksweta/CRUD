import React, { useState } from "react";
import Inputfield from "./Inputfield.js";
import Button from "./Button";
import Table from "./Table.js";

const Addproduct = () => {
  const [product, setProduct] = useState({
    ID: "",
    Category: "",
    ProductName: "",
    Description: "",
    Price: "",
    ShippingCharge: "",
  });

  const [listOfProducts, setListOfProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handletext = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObj = { ...product };
    newObj[name] = value;
    setProduct(newObj);
  };

  

  const handlesubmit = () => {
    setListOfProducts((oldProducts) => [...oldProducts, product]);
    console.log(listOfProducts);
    console.log("Product:", product);
    setProduct({
      ID: "",
      Category: "",
      ProductName: "",
      Description: "",
      Price: "",
      ShippingCharge: "",
    });
  };


  const handledelete = (ID) => {
    console.log("id", ID);
    const abc = listOfProducts.filter((pro) => pro.ID !== ID)
    setListOfProducts(abc);
  }

  const handleedit = (product) => {
      console.log("product", product);
      setIsEdit(true);
      setProduct({
        ID: product.ID,
        Category: product.Category,
        ProductName: product.ProductName,
        Description: product.Description,
        Price: product.Price,
        ShippingCharge: product.ShippingCharge,
      });    
   }


   const editTask = (prod) => {
     setIsEdit(false)
    const editedTaskList = listOfProducts.map(product => {
      if(product.ID === prod.ID) {
        return {
          ...product,
            Category: prod.Category,
            ProductName: prod.ProductName,
            Description: prod.Description,
            Price: prod.Price,
            ShippingCharge: prod.ShippingCharge,
        }
      }
      return product;
    })
    setListOfProducts(editedTaskList)
   }

  return (
    <div>
      <h1>ADD PRODUCTS</h1>
      <br />
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
        label=" ProductName :"
        name="ProductName"
        defaultValue={product.ProductName}
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
      <Button colour="firebrick" textcolor="white" onClick={isEdit ? () => editTask(product) : handlesubmit}>
        {isEdit ? "Save edit" : "Submit On Board"}
      </Button>

      <Table products={listOfProducts} handledelete={handledelete} handleedit={handleedit}/>
    </div>
  );
};

export default Addproduct;
