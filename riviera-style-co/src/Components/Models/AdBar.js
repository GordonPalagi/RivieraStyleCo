import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router'

function AdBar({onClick}) {
    const navigate = useNavigate();

  return (
      <div onClick={() => navigate("/shopping")} className='bannerAd'>
          Limited Time
          <span className='adStyle'> 20% off for Mothers Day!</span>
          <div>
              <AiOutlineClose onClick={onClick}/>
          </div>
      </div>
  )
}

export default AdBar