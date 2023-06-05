import React from 'react'
import fashion from '../../Assets/fashion_photo.avif'
import '../HeroPoster/HeroPoster.css'
import wheel from '../../Assets/wheel.webp'

function HeroPoster({title}) {
  
  return (
    <div className='hero-con'>
        <div className='wheel-con'>
            <span className='hero-title'>{title}</span>
            <img className='wheel' src={wheel} alt="img"/>
        </div>
        <img className='hero-img' src={fashion} alt="" />
    </div>
  )
}

export default HeroPoster
