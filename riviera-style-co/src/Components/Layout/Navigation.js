import React from 'react'
import '../CSS/NavCss.css'

function Navigation() {

    const navBarLinks = ["Womens", "Mens", "Shoes", "Accessories"]

    const Banner = ({title}) => {

        return (
            <>
                <div className='banner-con'>
                    <div className='title'>{title}</div>
                    {navBarLinks.map((item) => {
                        return (
                            <div className='item'>{item}</div>
                            )
                        })}
                </div>
                <div className='bannerAd'>Limited Time <span className='adStyle'> 20% off for Mothers Day!</span></div>
            </>
        )
    }




  return (
    <Banner title={"Riviera Style Co."}/>
  )
}

export default Navigation