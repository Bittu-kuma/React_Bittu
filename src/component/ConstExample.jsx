import React from 'react';

const ConstExample = () => {
    const msg = "Hello World!....";
    console.log(msg);  // Hello World!....
    // msg = "Start React Trainning";
    // console.log(msg);  // error : assignment to constant variable

    // const msg = "Hello React"; // Error : Re-declaration of const variable

  return(
      <>
        <h1>"Const" keyword Characterist</h1>
            <ul>
                <li>
                    Block scoped
                </li>
                <li>
                    Not Allowed the Duplicate declaration
                </li>
                <li>
                    Not Allowed the Value updation
                </li>
                <li>
                    Not Raised the Hoisting case
                </li>

            </ul>
      </>
  )
};

export default ConstExample;
