import React from 'react'
import '../CSS/SlimCardCss.css'

function SlimCard({catagorie, className}) {
  return (
      <div className={className}>
          {catagorie.map((item, index) => {
            return (
                <div key={index} className='card-con'>
                      <img className='slimCard-photo' src={item.photo}/>
                      <div>{item.catagorie}</div>
                  </div>
              )
            })}
      </div>
  )
}

export default SlimCard