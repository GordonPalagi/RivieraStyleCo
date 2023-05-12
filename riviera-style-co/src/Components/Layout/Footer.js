import React from 'react'
import '../CSS/Layout/FooterCSS.css'
import { SiLinkedin } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'


function Footer() {
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
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Shipping & Returns</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
        </ul>
        <ul className='list'>
          <li>Newsletter Signup</li>
          <li>Size Chart</li>
          <li>Customer Reviews</li>
          <li>Store Locator</li>
          <li>Careers</li>
        </ul>


    </div>
  )
}

export default Footer