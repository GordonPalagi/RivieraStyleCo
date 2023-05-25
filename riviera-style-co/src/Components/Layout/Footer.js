import React from 'react'
import '../CSS/Layout/FooterCSS.css'
import { SiLinkedin } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { useNavigate } from 'react-router'


function Footer() {
const navigate = useNavigate();



  return (
    <div className='footer-con'>

        <div className='tag-con'>
            <h2>Riviera Style Co.</h2>
            <h4 className='understated'><span>Understated.</span> <span><em>Luxury.</em></span></h4>
            <p>For the latest trends and fashion, or if you want to hire the guy who built this fake website, Contact me at gordonpalagi1@gmail.com</p>
            <div className='icon-con'>
              <span className='icon'><SiLinkedin/></span>
              <span className='icon'><SiTwitter/></span>
              <span className='icon'><SiGithub/></span>
            </div>
        </div>

        <ul className='list'>
          <li onClick={() => navigate('/about')} className='Link'>About Us</li>
          <li className='Link'>Contact Us</li>
          <li className='Link'>Shipping & Returns</li>
          <li className='Link'>Privacy Policy</li>
          <li className='Link'>Terms & Conditions</li>
          <li className='Link'>FAQ</li>
        </ul>
        <ul className='list'>
          <li className='Link'>Newsletter Signup</li>
          <li className='Link'>Size Chart</li>
          <li className='Link'>Customer Reviews</li>
          <li className='Link'>Store Locator</li>
          <li className='Link'>Careers</li>
        </ul>


    </div>
  )
}

export default Footer