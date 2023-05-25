import React from 'react';
import '../CSS/Models/HeroCardCSS.css';
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
        <div className='inner-hero-con '>
          <h1>{title}</h1>
          {renderSubHeader()}
          {renderLinks()}
          {/* {array.map((item, index) => {
                return <div 
                  key={index} className='subheader'>{item.sub}</div>
            })} */}
          {/* {array.map((item, index) => {
            return <li 
              onClick={() => navigate("/shopping")} 
              key={index} 
              className='bannerLinks'>{item.item1} {item.item2}</li>
          })} */}
        </div>
        <img className='groupPhoto' src={photo} alt="" />
      </div>
    )
  }

export default HeroCard