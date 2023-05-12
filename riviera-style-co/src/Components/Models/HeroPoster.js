// import React from 'react'
// import fashion from '../Images/fashion_photo.avif'
// import '../CSS/HeroCSS.css'
// import wheel from '../Images/wheel.png'

// function HeroPoster({title}) {
//   return (
//     <div className='hero-con'>
//         <div className='wheel-con'>
//             <span className='hero-title'>{title}</span>
//             <img className='wheel' src={wheel} alt="" />
//         </div>
//         <img className='hero-img' src={fashion} alt="" />
//     </div>
//   )
// }

// export default HeroPoster

import React from 'react'
import fashion from '../Images/fashion_photo.avif'
import '../CSS/Models/HeroCSS.css'
import wheel from '../Images/wheel.png'

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
