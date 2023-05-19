import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import '../CSS/Models/CardDetailsCSS.css';

function CardDetails({title, price}) {
    const [heart, setHeart] = useState(false);

    const handleClick = () => {
        setHeart(prev => !prev);
    }


  return (
    <div className='shopCard-details-con'>

            <div className='shopCard-details-inner-con'>
                <p>{title}</p>
                {!heart ? 
                      <AiOutlineHeart onClick={handleClick}/> 
                      : 
                      <AiFillHeart onClick={handleClick}/>
                }
            </div>
            
            <p>{price}</p>
    </div>
  )
}

export default CardDetails