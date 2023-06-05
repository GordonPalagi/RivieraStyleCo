import React from 'react';
import '../Navbar/Navigation.css'
import BannerData from '../../Data/BannerData';
import wheel from '../../Assets/wheel.webp'
import NavDropdown from '../../UIComponents/NavDropdown/NavDropdown.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function Navigation() {

    const [hoveredLink, setHoveredLink] = useState(null);
    const [companyName, setCompanyName] = useState("Riviera Style Co.");
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true);
    const pageYOffsetLower = 100;
    const pageYOffsetUpper = 150;
    
    const handleMouseOver = (index) => {
      setHoveredLink(index);
    };
    const handleMouseLeave = () => {
      setHoveredLink(null);
    }
    const navigate = useNavigate();


    useEffect(() => {
      const handleWindowResize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 480) {
          setCompanyName("RSC.")
        } else {
          setCompanyName("Riviera Style Co.")
        }

      };
      window.addEventListener('resize', handleWindowResize);

    }, [companyName])
    
    


    // const handleScroll = useCallback(() => {
    //   const currentScrollPos = window.pageYOffset;
    //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > pageYOffsetUpper) || (currentScrollPos < pageYOffsetLower));
    //   setPrevScrollPos(currentScrollPos);
    //   setHoveredLink(null);
    // }, [prevScrollPos]);

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);

    //   return () => window.removeEventListener('scroll', handleScroll);

    // }, [prevScrollPos, visible, handleScroll]);
    

    const Banner = ({title}) => {
      return (
          <nav  
            className="banner-con">
            
            <div onClick={() => navigate("/")} className='title-con'>
              <div className="title">{title}</div>
              <img className='title-wheel' src={wheel} alt="" />
            </div>

            {BannerData.map((item, index) => {
              return (
                <Link
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                  className='item Link'>

                  {item.title}
                  
                </Link>
              )
            })}
            
          </nav>
      );
    };


    return (
      <>
        <Banner title={companyName}/>

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