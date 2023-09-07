import React from 'react';
import '../Navigation/Navigation.css'
import BannerData from '../../../Data/BannerData';
import NavDropdown from '../NavDropdown/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function Navigation() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [companyName, setCompanyName] = useState("Riviera Style Co.");
    const handleMouseOver = (index) => {
      setHoveredLink(index);
    };
    const handleMouseLeave = () => {
      setHoveredLink(null);
    }
    useEffect(() => {
      const handleHideTitle = () => {
        const scrollPos = window.scrollY;
        const windowWidth = window.innerWidth;

        if (scrollPos > 200 && windowWidth <= 566) {
          setCompanyName("");
          console.log(Math.random())
        } else {
          setCompanyName("Riviera Style Co.")
        }

      };
      window.addEventListener('scroll', handleHideTitle);
      window.addEventListener('resize', handleHideTitle); // Add a resize event listener

      return () => {
        window.removeEventListener('scroll', handleHideTitle);
        window.removeEventListener('resize', handleHideTitle); // Cleanup the resize event listener
      };

    }, [])

    const Banner = ({title}) => {
      return (
        <nav className={title == "" ? "no-title-banner" : "banner-con"}>

          {title != "" ? (
            <Link to={"/"}>
              <div className="title">{title}</div>
            </Link>
          ) : null}

          <div className="navigation-links">
            {BannerData.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  onMouseOver={() => handleMouseOver(index)}
                  className="item"
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
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