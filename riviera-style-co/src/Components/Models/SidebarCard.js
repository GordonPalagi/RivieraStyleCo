import React from 'react'
import { useState } from 'react'
import SidebarData from '../Data/SidebarData';
import '../CSS/Models/SidebarCSS.css';
import { Link } from 'react-router-dom';

function SidebarCard() {

const [link, setLink] = useState(null);

const handleMouseHover = (index) => {
    setLink(index);
}

const handleMouseOut = () => {
    setLink(null);
}


  return (
        <ul onMouseLeave={handleMouseOut} 
            className='sidebar-ul-con'>
                
            {SidebarData.map((item, index) => {
                return (
                    <li onMouseEnter={() => handleMouseHover(index)}
                        className='main-links'>
                        {item.linkTitle}
                        {index === link && (
                            <ul className={'sublinks'}>
                                {item.subLinks.map((sublink, subIndex) => {
                                    return <Link className='sidebar-link Link' key={subIndex}>{sublink}</Link>
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
  )
}

export default SidebarCard