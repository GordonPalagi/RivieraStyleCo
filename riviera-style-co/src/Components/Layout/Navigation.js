import React from 'react';
import '../CSS/Layout/NavCss.css';
import BannerData from '../Data/BannerData.js';
import wheel from '../Images/wheel.png';
import NavDropdown from '../Models/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';


function Navigation() {

    const [hoveredLink, setHoveredLink] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    
    const handleMouseOver = (index) => {
      setHoveredLink(index);
    };
    const handleMouseLeave = () => {
      setHoveredLink(null);
    }
    const navigate = useNavigate();



    const handleScroll = useCallback(() => {
      const currentScrollPos = window.pageYOffset;
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 150) || (currentScrollPos < 100));
      setPrevScrollPos(currentScrollPos);
      setHoveredLink(null);
    }, [prevScrollPos]);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    


    const Banner = ({title}) => {
      return (
          <nav style={{top: visible ? '0' : '-100%'}} className="banner-con">
            
            <div onClick={() => navigate("/")} className='title-con'>
              <div className="title">{title}</div>
              <img className='title-wheel' src={wheel} alt="" />
            </div>

            {BannerData.map((item, index) => {
              return (
                <Link
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                  className='item Link'
                >
                  {item.title}
                </Link>
              )
            })}
            
          </nav>
      );
    };


    return (
      <>
        <Banner title={"Riviera Style Co."}/>

        {hoveredLink !== null ? (
          <div onMouseLeave={handleMouseLeave}>
            <NavDropdown 
              links={BannerData[hoveredLink].links}
              picture={BannerData[hoveredLink].photos} 
            />
          </div>
        ) : null}

      </>
    )
  }

export default Navigation