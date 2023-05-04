import React from 'react'
import '../CSS/NavCss.css'
import { useState } from 'react';
import beauty from '../Images/beautyAndBrains.avif'
import BannerData from '../Data/BannerData.js'
import wheel from '../Images/wheel.png'
import {AiOutlineClose} from 'react-icons/ai'

function Navigation() {

    // const navBarLinks = ["Womens", "Mens", "Shoes", "Accessories"]

    // const [isHovered, setIsHovered] = useState(false);
    // const [hoveredLink, setHoveredLink] = useState(false);

    // const handleMouseOver = (index) => {
    //     setIsHovered(true);
    //     setHoveredLink(index);
    // }
    // const handleMouseOut = () => {
    //     setIsHovered(false);
    //     setHoveredLink(null);
    // }

    // const BannerAd = () => {
    //     return (
    //         <div className='bannerAd'>
    //             Limited Time 
    //             <span className='adStyle'> 20% off for Mothers Day!</span>
    //         </div>
    //     )
    // }


    // const BannerHover = ({array}) => {
        


    //     return (
    //         <div className='hover-wrapper'>
    //             <div className='bannerAd'>
    //                 Limited Time 
    //                 <span className='adStyle'> 20% off for Mothers Day!</span>
    //             </div>
    //             <div className='hovered-box-con'>
    //                 <div className='li-con'>
    //                     <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
    //                     <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
    //                     <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat.</li>
    //                 </div>
    //                 <img src={beauty} alt="" />
    //             </div>
    //         </div>
    //     )
    // }


    // const Banner = ({title}) => {

    //     return (
    //         <>
    //             <div className='banner-con'>
    //                 <div className='title'>{title}</div>
    //                 {navBarLinks.map((item) => {
    //                     return (
    //                             <div 
    //                                 onMouseOver={handleMouseOver}
    //                                 onMouseOut={handleMouseOut} 
    //                                 className='item'>{item}
    //                             </div>
    //                         )
    //                     })}
    //             </div>
    //             {isHovered ? <BannerHover/> : <BannerHover/>}
    //         </>
    //     )
    // }
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isBannerHovered, setIsBannerHovered] = useState(false);
    const [close, setClose] = useState(false);
  
    // sets index for each navlink and lets us 
    // reveal the extra links in the popup
    const handleMouseOver = (index) => {
      setIsHovered(true);
      setIsBannerHovered(true);
      setHoveredLink(index);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
      setHoveredLink(null);
    };

    const handleClick = () => setClose(!close)

    // should eventually get adds from database
    const BannerAd = () => {
      return (
        <>
          {!close ? (
              <div className="bannerAd">
                Limited Time 
                <span className="adStyle"> 20% off for Mothers Day!</span>
                <div className='close'>
                  <AiOutlineClose onClick={handleClick}/>
                </div>
              </div>
          ) : <div></div>}
        </>
      );
    };
    
  

    const BannerHover = ({array}) => {
      // this is optional chaining. Essentially saying, if the item within the array is NOT null or undefined, then we assign this constant that object. in other words
      // if array[HOVEREDLINKS] exists then assign it's 'links' property to the(this) 'links' constants.
      // they should be different names, but the array should have a links property in it. Otherwise the  .links would change.
      // if it is null or empty, instead of throwing an error, it just returns an empty array. This is a very nice feature to have. 
      // this was introduce in the ECMAScript 2020 version.
      const links = array[hoveredLink]?.links || [];
      
      return (
        <>
        <BannerAd onClick={handleClick}/>
        {isHovered && isBannerHovered ? 
        
        <div className="hover-wrapper">

          <div className="hovered-box-con">

            <div className="li-con">
              {links.map((link, index) => (
                <li key={index}>{link}</li>
                ))}
            </div>
            <img className='banner-img' src={beauty} alt="" />
          </div>

        </div> 
        
        
        : null}
        </>
      );
    };

    const Banner = ({title}) => {
      return (
        <>
          <div className="banner-con">
            <div className='title-con'>
              <div className="title">{title}</div>
              <img className='title-wheel' src={wheel} alt="" />
            </div>
            
            {BannerData.map((link, index) => {
              return (
                <div
                  key={link.title}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                  className="item"
                >
                  {link.title}
                </div>
              );
            })}
          </div>
          {isHovered && hoveredLink !== null ? 
          <BannerHover array={BannerData} /> : <BannerAd/>}
        </>
      );
    };


    return (
      <Banner title={"Riviera Style Co."}/>
    )
  }

export default Navigation