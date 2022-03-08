import React from 'react';

const StyleComponent = () => {
    const style = {
        listStyle:1,
        color:"red",
        fontSize:"27px"
      }
  return (
    <>
        <h1>Fruits List</h1>  
        <ul style={style}>
            <li>Apple</li>
            <li>Mango</li>
            <li>Banana</li>
            <li>Pineapple</li>
        </ul>
    </>
  )
};

export default StyleComponent;
