import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'

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