import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router'
import '../CSS/Models/AdCSS.css'

function AdBar({onClick}) {
    const navigate = useNavigate();

  return (
      <div className='bannerAd'>
          Limited Time
          <span onClick={() => navigate("/shopping")} className='adStyle'> 20% off for Mothers Day!</span>
          <div className='X-out-ad'>
              <AiOutlineClose onClick={onClick}/>
          </div>
      </div>
  )
}

export default AdBar