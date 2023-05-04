import React from 'react'
import '../CSS/SlimCardCss.css'

function SlimCard({catagorie, className}) {
  return (
      <div className={className}>
          {catagorie.map(item => {
            return (
              <>
                <div className='card-con'>
                        <img className='slimCard-photo' src={item.photo}/>
                        <div>{item.catagorie}</div>
                    </div>
                </>
              )
            })}
      </div>
  )
}

export default SlimCard