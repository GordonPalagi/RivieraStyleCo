import React from 'react'
import '../CSS/NavCss.css'
import { useState } from 'react';
import beauty from '../Images/beautyAndBrains.avif'


function Navigation() {

    const navBarLinks = ["Womens", "Mens", "Shoes", "Accessories"]

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(false);

    const handleMouseOver = (index) => {
        setIsHovered(true);
        setHoveredLink(index);
    }
    const handleMouseOut = () => {
        setIsHovered(false);
        setHoveredLink(null);
    }

    const BannerAd = () => {
        return (
            <div className='bannerAd'>
                Limited Time 
                <span className='adStyle'> 20% off for Mothers Day!</span>
            </div>
        )
    }


    const BannerHover = ({array}) => {
        


        return (
            <div className='hover-wrapper'>
                <div className='bannerAd'>
                    Limited Time 
                    <span className='adStyle'> 20% off for Mothers Day!</span>
                </div>
                <div className='hovered-box-con'>
                    <div className='li-con'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
                    </div>
                    <img src={beauty} alt="" />
                </div>
            </div>
        )
    }


    const Banner = ({title}) => {

        return (
            <>
                <div className='banner-con'>
                    <div className='title'>{title}</div>
                    {navBarLinks.map((item) => {
                        return (
                                <div 
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut} 
                                    className='item'>{item}
                                </div>
                            )
                        })}
                </div>
                {isHovered ? <BannerHover/> : <BannerHover/>}
            </>
        )
    }




  return (
    <Banner title={"Riviera Style Co."}/>
  )
}

export default Navigation