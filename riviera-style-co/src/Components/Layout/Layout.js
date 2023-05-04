import React from 'react'
import Navigation from '../Layout/Navigation.js'
import Footer from '../Layout/Footer.js'

function Layout({children}) {
  return (
    <>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
    </>

  )
}

export default Layout