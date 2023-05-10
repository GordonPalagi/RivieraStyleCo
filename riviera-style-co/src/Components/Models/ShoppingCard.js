import React from 'react'
import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

function ShoppingCard({props}) {
const [heart, setHeart] = useState(false);

const handleClick = () => {
    setHeart(prev => !prev);
}

  return (
    <div key={props.id} className='shoppingCard-con'>

        <img className='shopCard-img' src={props.image} alt="" />
        
        <div className='shopCard-details-con'>
            <div className='shopCard-details-inner-con'>
                <div>{props.title}</div>
                {!heart ? <AiOutlineHeart onClick={handleClick}/> 
                : <AiFillHeart onClick={handleClick}/>}
            </div>
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default ShoppingCard