import React from 'react';
import img from '../images/skillstone.png';
const DisplayImage = () => {
    const style = {
        width:"100%",
        height:"100vh",
        backgroundColor:"skyblue",
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between",
    }
    const btnStyle = {
        padding:"15px 30px",
        color:"white",
        backgroundColor:"blue",
        border:"0px"
    }
  return(
      <>
        <div style={style}>
            <div style={{padding:"40px"}}>
                <img src={img} alt="image"></img>
            </div>
            <div style={{padding:"40px"}}>
                <h1 style={{letterSpacing:"3px",color:"blue"}}>Welcome To Skillstone Program</h1>
                <p>Skillstone is an initiative by <span style={{color:"red"}}>Grazitti interactive LLP</span>—one of the largest companies in the Chandigarh-Mohali-Panchkula tri-city region, with offices in USA, Canada, Singapore, and Australia. As experts in the IT industry, our aim is to bridge the gap between academics and industry. 
                </p>
                <p>
                The perfect amalgamation of theoretical knowledge and practical experience helps create an employment-ready workforce that is all-set, right from the get-go. Our meticulously planned wide spectrum of training programs give students and fresh grads an edge in landing their coveted job.
                </p>
                <button style={btnStyle}>Learn More</button>
            </div>
        </div>
      </>
  )
};

export default DisplayImage;
