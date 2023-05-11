import React from 'react';
import '../CSS/NavCss.css';
import { useState } from 'react';
import beauty from '../Images/beautyAndBrains.avif';
import BannerData from '../Data/BannerData.js';
import wheel from '../Images/wheel.png';
import AdBar from '../Models/AdBar';
import NavDropdown from '../Models/NavDropdown';
import { useNavigate } from 'react-router-dom';


function Navigation() {

    const [hoveredLink, setHoveredLink] = useState(null);
    const [close, setClose] = useState(true);
    
    const handleMouseOver = (index) => {
      setHoveredLink(index);
    };

    const handleMouseLeave = () => {
      setHoveredLink(null);
    }

    const handleClick = () => setClose(!close)
    
    const navigate = useNavigate();


    const Banner = ({title}) => {
      return (
          <nav className="banner-con">
            
            <div onClick={() => navigate("/")} className='title-con'>
              <div className="title">{title}</div>
              <img className='title-wheel' src={wheel} alt="" />
            </div>

            {BannerData.map((item, index) => {
              return (
                <div
                  key={index.title}
                  onMouseOver={() => handleMouseOver(index)}
                  onClick={() => navigate("/shopping")}
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