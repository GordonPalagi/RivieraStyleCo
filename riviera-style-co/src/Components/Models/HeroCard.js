import React from 'react'

function HeroCard({ title, array, photo, className }) {
    return (
      <div className={className}>
        <div className='inner-hero-con '>
        <h1>{title}</h1>
          {array.map(item => {
                return <div className='subheader'>{item.sub}</div>
            })}
          {array.map((item) => {
            return <div className='bannerLinks'>{item.item1} {item.item2}</div>
          })}
        </div>
        <img className='groupPhoto' src={photo} alt="" />
      </div>
    )
  }

export default HeroCard