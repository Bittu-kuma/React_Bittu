import React from 'react';
import InputComponent from './InputComponent';

const FormComponent = () => {
  return (
      <>
        <form>
            <InputComponent type="text" placeholder="Enter Your Name" />
            <InputComponent type="email" placeholder="Enter Your Email" />
            <InputComponent type="number" placeholder="Enter Your Mobile No." />
            <InputComponent type="text" placeholder="Enter Your State" />
            <InputComponent type="text" placeholder="Enter Your City" />
            <InputComponent type="submit" Inputstyle={{width:"auto",backgroundColor:"blue",color:"white",padding:"15px 30px", border:"0px"}}/>

        </form>
      </>
  )
};

export default FormComponent;
