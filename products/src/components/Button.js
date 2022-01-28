import React from "react";

const Button = ({ onClick, children, colour, textcolor }) => {
    return (
         <div>
             <button onClick={onClick} style={{backgroundColor: `${colour}`, color:`${textcolor}`}}>{children}</button>
         </div>
    );
};

export default Button;