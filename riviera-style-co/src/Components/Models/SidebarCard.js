import React from 'react'
import { useState } from 'react'
import SidebarData from '../Data/SidebarData';
import '../CSS/Models/SidebarCSS.css';

function SidebarCard() {

const [choice, setChoice] = useState(false);
const [link, setLink] = useState(null);

const handleMouseHover = (index) => {
    setChoice(true);
    setLink(index);
}

const handleMouseOut = () => {
    setChoice(false);
    setLink(null);
}


  return (
        <ul 
            onMouseLeave={handleMouseOut}
          className='sidebar-ul-con'>

            {SidebarData.map((item, index) => {
                return (
                    <li 
                        onMouseEnter={() => handleMouseHover(index)}
                        className='main-links'
                    >

                        {item.linkTitle}

                        {index === link && (
                            <ul 
                                className={'sublinks'}>

                                {item.subLinks.map((sublink, subIndex) => {
                                    return <li key={subIndex}>{sublink}</li>
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