import React from 'react';

const LetExample = () => {
    let num = 10;
    if(num > 5)
    {
        let msg = "Yes Number is greater than Five";
        console.log(msg);  // Yes Number is greater than Five
    }
    // console.log(msg) // Error : msg is not define
  return (
      <>
        <h1>"let" keyword Characterist</h1>
            <ul>
                <li>
                    Block scoped
                </li>
                <li>
                    Not Allowed the Duplicate declaration
                </li>
                <li>
                    Allowed the Value updation
                </li>
                <li>
                    Not Raised the Hoisting case
                </li>

            </ul>
      </>
  )
};

export default LetExample;
