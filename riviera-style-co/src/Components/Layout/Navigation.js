import React from 'react'
import '../CSS/NavCss.css'
import { useState } from 'react';
import beauty from '../Images/beautyAndBrains.avif'
import BannerData from '../Data/BannerData.js'
import wheel from '../Images/wheel.png'
import AdBar from '../Models/AdBar';
import NavDropdown from '../Models/NavDropdown';


function Navigation() {

    const [hoveredLink, setHoveredLink] = useState(null);
    // closes bannerAd
    const [close, setClose] = useState(true);

    
    // sets index for each navlink and lets us 
    // reveal the extra links in the popup
    const handleMouseOver = (index) => {

      setHoveredLink(index);
    };

    const handleMouseLeave = () => {
      setHoveredLink(null);
    }

    const handleClick = () => setClose(!close)


    const Banner = ({title}) => {
      return (
          <nav className="banner-con">
            
            <div className='title-con'>
              <div className="title">{title}</div>
              <img className='title-wheel' src={wheel} alt="" />
            </div>

            {BannerData.map((item, index) => {
              return (
                <div
                  key={index.title}
                  onMouseOver={() => handleMouseOver(index)}
                  className='item'
                >
                  {item.title}
                </div>
              )
            })}
            
          </nav>
      );
    };


    return (
      <>
        <Banner title={"Riviera Style Co."}/>
        {close && <AdBar onClick={handleClick}/>}
        {hoveredLink !== null ? (
          <div onMouseLeave={handleMouseLeave}>
            <NavDropdown 
              links={BannerData[hoveredLink].links}
              picture={beauty} 
            />
          </div>
        ) : null}
      </>
    )
  }

export default Navigation