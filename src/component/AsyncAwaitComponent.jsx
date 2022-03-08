import React, { useEffect, useState } from 'react';

const AsyncAwaitComponent = () => {
    const [data , setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        async function UserData()
        {
            try
            {
               
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const json = await response.json();
                // console.log(json);
                
                setData(json)
            }catch(error)
            {   
                console.log("something is error!...");
            }
        }
        UserData();
        
    },[]);

    const handleClick = ()=>{
       setIsLoading(true);
    }
    
  return (
      <>
        <div>
            <h1>API DATA LIST</h1>
        <ul>
          {data.map(el => (
            <li>
               {el.title}
            </li>
          ))}
        </ul>
      </div>
      </>
  )
};

export default AsyncAwaitComponent;
