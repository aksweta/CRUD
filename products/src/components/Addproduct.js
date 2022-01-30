import React, { useState }  from "react";
import Inputfield from "./Inputfield.js";
import Button from "./Button";
import Table from "./Table.js";

const Addproduct = () => {
     
    // const [isTableDisplay , setIsTableDisplay] = useState(false);
        
      const [product, setproduct] = useState({
          id: "",
          category: "",
          name: "",
          desc: "",
          price: "",
          shipping : ""
        });


    return(
        <div>
        <h1>ADD PRODUCTS</h1>
        <br />
        <Inputfield type="number" label=" ID :" name="id" />
        <Inputfield type="number" label=" Category :" />
        <Inputfield type="number" label=" Name :" />
        <Inputfield type="number" label=" Description :" />
        <Inputfield type="number" label=" Price :" />
        <Inputfield type="number" label=" Shipping Charge :" />
        <Button colour="firebrick" textcolor="white">Submit On Board</Button>

        <br/>
         <Table />

        </div>  
    );
};

export default Addproduct;