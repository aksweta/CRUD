import React , {useState} from "react";
import Inputfield from "./Inputfield.js";
import Button from "./Button";
import Table from "./Table.js";

const Addproduct = () => {
     
    const [isTableDisplay , setIsTableDisplay] = useState(false)
        
      
    return(
        <div>
        <h1>ADD PRODUCTS</h1>
        <Inputfield type="number" label=" ID :" onChange={(e) => } />
        <Inputfield type="number" label=" Category :" />
        <Inputfield type="number" label=" Name :" />
        <Inputfield type="number" label=" Description :" />
        <Inputfield type="number" label=" Price :" />
        <Inputfield type="number" label=" Shipping Charge :" />
        <Button colour="orange" textcolor="white">Submit On Board</Button>
         <Table />

        </div>  
    );
};

export default Addproduct;