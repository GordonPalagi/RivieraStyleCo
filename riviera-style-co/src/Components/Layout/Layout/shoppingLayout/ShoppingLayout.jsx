import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import SidebarCard from '../../../UIComponents/Sidebar/SidebarCard'
import { useState, useCallback, useEffect } from 'react'
import './ShoppingLayout'

function ShoppingLayout() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true);


    const ShoppingPanel = () => {

        return  (
            <div>
                <NavLink to={"jackets"}>Jackets</NavLink>
                <NavLink to={"dresses"}>Dresses</NavLink>
                <NavLink to={"sweats"}>Sweats</NavLink>
                <NavLink to={"flashy"}>Trends</NavLink>
            </div>
        )
    }

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setShowSidebar((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 200) || (currentScrollPos < 150));
        setPrevScrollPos(currentScrollPos);
    },[prevScrollPos]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, showSidebar, handleScroll])
    






  return (
    <div>
        <ShoppingPanel/>
        <div className={showSidebar ? 'shopping-sidebar-con' : 'hide-sidebar'}>
            <SidebarCard/>
        </div>
        <Outlet/>
    </div>
  )
}

export default ShoppingLayout