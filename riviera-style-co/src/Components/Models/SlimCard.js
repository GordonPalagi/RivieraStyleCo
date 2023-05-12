import React from 'react'
import { useNavigate } from 'react-router'
import '../CSS/Models/SlimCardCss.css'

function SlimCard({catagorie, className}) {
  const navigate = useNavigate();


  return (
      <div onClick={() => navigate("/shopping")} className={className}>
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