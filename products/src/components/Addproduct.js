import React, { useState }  from "react";
import Inputfield from "./Inputfield.js";
import Button from "./Button";
import Table from "./Table.js";

const Addproduct = () => {
    
    const [Product , SetProduct] = useState({
        ID : '',
        Category : '',
        Name : '',
        Description : '',
        Price : '',
        ShippingCharge : ''
});
    


    const handletext = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        Product[name] = value ;
        SetProduct(Product);
    }


    const handlesubmit = () => {
        console.log("Product:" , Product );
    }

    return(
        <div>
        <h1>ADD PRODUCTS</h1>
        <Inputfield type="number" label=" ID :"  name="ID" onchange={handletext}/>
        <Inputfield type="number" label=" Category :" name="Category"  onchange={handletext}/>
        <Inputfield type="number" label=" Name :" name="Name" onchange={handletext}/>
        <Inputfield type="number" label=" Description :" name="Description"  onchange={handletext}/>
        <Inputfield type="number" label=" Price :" name="Price" onchange={handletext} />
        <Inputfield type="number" label=" Shipping Charge :" name="ShippingCharge" onchange={handletext} />
        <Button colour="orange" textcolor="white" onClick={handlesubmit}>Submit On Board</Button>
        </div>  
    );
};

export default Addproduct;