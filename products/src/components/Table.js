import React from "react";
import Button from "./Button";

const Table = ({ products, handledelete, handleedit }) => {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Product Name</th>
          <th>Description </th>
          <th>Price</th>
          <th>Shipping Charge</th>
          <th>ACTIONS</th>
        </tr>
        
          {products.map(product => {
            return (
              <tr>
                <th>{product.ID}</th>
                <th>{product.Category}</th>
                <th>{product.ProductName}</th>
                <th>{product.Description}</th>
                <th>{`$${product.Price}`}</th>
                <th>{`$${product.ShippingCharge}`}</th>

                <th><Button onClick={() => handleedit(product)}>EDIT</Button><Button onClick={() => handledelete(product.ID)}>DElETE</Button></th>
              </tr>
            )
          })}
        
      </table>
    </div>
  );
};

export default Table;
