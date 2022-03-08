import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';

const LoginComponent = ()=> {
      const style={
          width:"400px",
          height:"400px",
          backgroundColor:"skyblue",
          margin:"50px auto",
          paddingTop:"40px"
      }
      const handleAPICall = (e)=>
      {
          e.preventDefault();
          alert("ok");
      }
    return (
        <>
            <div style={style}>
                <h1 style={{textAlign:"center"}}>Login System</h1>
                <form>
                    <InputComponent type="text" placeholder="Enter Your user ID" />
                    <InputComponent type="password" placeholder="Enter Your Password" />
                    <ButtonComponent name="LOGIN" type="submit" handleClick={handleAPICall}/>
                </form>
            </div>
        </>
    )
}

export default LoginComponent;