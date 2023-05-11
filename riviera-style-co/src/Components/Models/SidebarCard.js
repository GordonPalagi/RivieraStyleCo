import React from 'react'
import { useState } from 'react'
import SidebarData from '../Data/SidebarData';

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
     !choice ? 
        <ul className='sidebar-ul-con'>
            {SidebarData.map((item, index) => {
                return (
                    <li 
                        onMouseOut={handleMouseOut}
                        onMouseEnter={() => handleMouseHover(index)}
                        onMouseLeave={handleMouseOut} 
                        key={item.id}>
                            {item.linkTitle}
                    </li>
                )
            })}
        </ul> : 
        <ul  className='sidebar-ul-con'>
            {SidebarData.map((item, index) => {
                return (
                    <li onMouseEnter={() => handleMouseHover(index)}
                        onMouseLeave={handleMouseOut} key={item.id}>
                        {item.linkTitle}
                        {index === link && (
                            <ul onMouseLeave={handleMouseOut} 
                                className={choice ? 'sublinks show' : 'sublinks'}>
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

 // !choice ? 
        // <ul>
        //     {SidebarData.map((item, index) => {
        //         return (
        //             <li onClick={() => handleClick(index)} key={item.id}>{item.linkTitle}</li>
        //         )
        //     })}
        // </ul> : 
        // <ul className='sidebar-card'>
        //     {SidebarData.map((item, index) => {
        //         return (
        //             <li onClick={() => handleClick(index)} key={item.id}>{item.linkTitle}
        //                 <ul className='sublinks'>
        //                     <li key={index}>{item.subLinks}</li>
        //                 </ul>
        //             </li>
        //         )
        //     })}
            
        // </ul>