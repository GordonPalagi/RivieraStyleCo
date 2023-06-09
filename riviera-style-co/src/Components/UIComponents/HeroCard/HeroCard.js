import React from 'react';
import '../HeroCard/HeroCard.css'
import {useNavigate} from 'react-router-dom';

function HeroCard({ title, array, photo, className }) {

  const renderSubHeader = () => {
    return array.map((item, index) => (
      <div className='subheader' key={index}>{item.sub}</div>
    ))
  }

  const renderLinks = () => {
    return array.map((item, index) => (
      <li 
        onClick={() => navigate("/shopping")}
        key={index}
        className='bannerLinks'>
          {item.item1} {item.item2}
      </li>
    ))
  }



  const navigate = useNavigate();
    return (
      <div className={className}>
        <div className='inner-hero-con'>
          <h1>{title}</h1>
          {renderSubHeader()}
          {renderLinks()}
        </div>
        <img className='groupPhoto' src={photo} alt="" />
      </div>
    )
  }

export default HeroCard