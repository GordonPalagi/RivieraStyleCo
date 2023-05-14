import React from 'react'
import {useNavigate} from 'react-router-dom';

function HeroCard({ title, array, photo, className }) {
  const navigate = useNavigate();
    return (
      <div className={className}>
        <div className='inner-hero-con '>
          <h1>{title}</h1>
          {array.map((item, index) => {
                return <div onClick={() => navigate("/shopping")} key={index} className='subheader'>{item.sub}</div>
            })}
          {array.map((item, index) => {
            return <div onClick={() => navigate("/shopping")} key={index} className='bannerLinks'>{item.item1} {item.item2}</div>
          })}
        </div>
        <img className='groupPhoto' src={photo} alt="" />
      </div>
    )
  }

export default HeroCard