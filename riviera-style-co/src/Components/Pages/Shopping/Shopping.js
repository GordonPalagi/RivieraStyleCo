import React from 'react'
import '../Shopping/Shopping.css'
import SidebarCard from '../../UIComponents/Sidebar/SidebarCard'
import Navigator from '../../UIComponents/Navigator/Navigator'
import PictureBed from '../../UIComponents/PictureBed/PictureBed'
import { useState, useCallback } from 'react'
import ClothingData from '../../Data/ClothingData'
import { useEffect } from 'react'



function Shopping() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true);
    const [classNameState, setClassNameState] = useState('picture-bed-four');

    const handleBigGrid = () => {
        setClassNameState('picture-bed-four');
    }

    const handleMediumGrid = () => {
        setClassNameState('picture-bed-five');
    }

    const handleSmallGrid = () => {
        setClassNameState('picture-bed-six');
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
    <>
        <Navigator/>
        <div className='shopping-con' >

            <div className={showSidebar ? 'shopping-sidebar-con' : 'hide-sidebar'}>
                <SidebarCard/>
            </div>

            <PictureBed 
                className={classNameState}
                bigGrid={handleBigGrid}
                medGrid={handleMediumGrid}
                smGrid={handleSmallGrid} 
                length={ClothingData.length}
                title={'Clothing Styles'}   
            />

        </div>
    </>
  )
}

export default Shopping