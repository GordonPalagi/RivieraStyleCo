import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Models/NavDropdownCSS.css'



const renderLinks = (links) => {

  return (
    <ul className='li-con'>
      {links.map((item, index) => (
          <Link
            className='Link' 
            to={'/shopItem'} 
            key={index}>{item}</Link>
      ))}
    </ul>
  )
}

const renderPictures = (picture) => {
  return (
    <div className='banner-picture-con'>
      {picture.map((item, index) => (
            <img key={index} 
              className='inbed-banner-img' 
              src={item} alt="" />
      ))}
    </div>
  )
}


function NavDropdown({ links, picture }) {
    return (
      <div className='hovered-box-con'>

        {renderLinks(links)}
        {renderPictures(picture)}
      
      </div>
    )
  }

export default NavDropdown