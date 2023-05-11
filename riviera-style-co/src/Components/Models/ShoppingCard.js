import React from 'react'
import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import '../CSS/ShoppingCardCSS.css'

function ShoppingCard({props}) {
const [heart, setHeart] = useState(false);
const [hover, setHover] = useState(false);

const handleClick = () => {
    setHeart(prev => !prev);
}

const handleMouseHover = () => {
  setHover(prev => !prev);
}

  return (
    <div onMouseEnter={handleMouseHover}
         onMouseLeave={handleMouseHover} 
         key={props.id} className='shoppingCard-con'
        >

        {
          !hover ? 
            <img className='shopCard-img' src={props.image} alt="" />
            :
            <img className='shopCard-img' src={props.image2} alt="" />
        }
        
        <div className='shopCard-details-con'>

            <div className='shopCard-details-inner-con'>
                <p>{props.title}</p>

                {
                  !heart ? 
                      <AiOutlineHeart onClick={handleClick}/> 
                      : 
                      <AiFillHeart onClick={handleClick}
                  />
                }

            </div>

            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default ShoppingCard