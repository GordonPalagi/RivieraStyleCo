import React from 'react'
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

function Layout({children}) {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default Layout