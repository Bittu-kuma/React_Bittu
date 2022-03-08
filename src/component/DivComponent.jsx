import React from 'react';
import FormComponent from './FormComponent';

const DivComponent = () => {
    const style = {
        width:"400px",
        height:"400px",
        backgroundColor:"skyblue",
        margin:"50px auto",
        padding:"10px 0px"
    }
  return (
      <>
        <div style={style}>
            <h1 style={{textAlign:"center",color:"hotpink"}}>Student Registration</h1>
            <FormComponent/>
        </div>
      </>
  )
};

export default DivComponent;
