import React from 'react';

const VarExample = () => {
    
   const VarFun = () =>
   {
    
    var message = "Hello React";
    console.log(message);
    if (true) {
        var message = "Updating Value";
        console.log(message); // Updating Value (inside block)
    }
    console.log(message); // outside the block, still Updating Value
   }
//    console.log(message);  // Error: message is not define
  return(
      <>
            <h1>"VAR" keyword Characterist {VarFun()}</h1>
            <ul>
                <li>
                    GLobal & Function scoped
                </li>
                <li>
                    Allowed the Duplicate declaration
                </li>
                <li>
                    Allowed the Value updation
                </li>
                <li>
                    Raised the Hoisting case
                </li>

            </ul>
      </>
  )
};

export default VarExample;
