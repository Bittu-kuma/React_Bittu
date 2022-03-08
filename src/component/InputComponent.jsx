import React from 'react';

const InputComponent = (props) => {
    const style = {
        width:"100%",
        padding:"10px 0px 10px 3px"
    }
    const divStyle = {
        padding:"5px 20px"
    }
  return (
      <>
        <div style={divStyle}>
            {
                props.type === "submit" ?
                 <input style={style} type={props.type} placeholder={props.placeholder} style={props.Inputstyle} />  
                 :
                 <input style={style} type={props.type} placeholder={props.placeholder} />  
            } 
        </div>
      </>
  )
};

export default InputComponent;
