import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [active,setActive] = useState(true);
  const [selected , setSelected] = useState(false);

  const handleClick = ()=>{
     setSelected(true);
     setActive(false);
  }
  return (
    <>
        <div className='container'> 
          <div className='tab-menu mt-5'> 
            <nav>
              <ul>
                <li>
                  <Link to="#" className={active || selected ? 'tab-link active' : 'tab-link'} onClick={handleClick}>ALL</Link>
                </li>
                <li>
                <Link to="#" className={selected ? 'tab-link active' : 'tab-link'} onClick={handleClick} >Doctor</Link>
                </li>
                <li>
                <Link to="#" className='tab-link'>Gallery</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Gallery