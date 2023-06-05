import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import '../ShoppingCard/ShoppingCard.css'
import CardDetails from '../CardDetails/CardDetails'

function ShoppingCard({props}) {
const [hover, setHover] = useState(false);

const navigate = useNavigate();

const handleMouseEnter = () => {
  setHover(true);
}

const handleMouseLeave = () => {
  setHover(false);
}


  return (
    <div key={props.id} className={'shoppingCard-con'}>
        
        {!hover ? 
            <img 
              onClick={() => navigate('/shopItem')} 
              className='shopCard-img' 
              src={props.image} alt="" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            :
            <img 
              onClick={() => navigate('/shopItem')} 
              className='shopCard-img' 
              src={props.image2} alt="" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
        }
        
        <CardDetails 
          title={props.title} 
          price={props.price} 
        />
        
    </div>
  )
}

export default ShoppingCard