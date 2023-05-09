import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function AdBar({onClick}) {

  return (
      <div className='bannerAd'>
          Limited Time
          <span className='adStyle'> 20% off for Mothers Day!</span>
          <div>
              <AiOutlineClose onClick={onClick}/>
          </div>
      </div>
  )
}

export default AdBar