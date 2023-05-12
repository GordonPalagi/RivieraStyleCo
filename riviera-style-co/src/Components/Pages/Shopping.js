import React from 'react'
import '../CSS/Pages/ShoppingCSS.css'
import SidebarCard from '../Models/SidebarCard'
import Navigator from '../Models/Navigator'
import PictureBed from '../Models/PictureBed'
import { useState } from 'react'
import ClothingData from '../Data/ClothingData'



function Shopping() {


    const [classNameState, setClassNameState] = useState('shoppingCard-con');

    const handleBigGrid = () => {
        setClassNameState('shoppingCard-con-large');
    }

    const handleMediumGrid = () => {
        setClassNameState('shoppingCard-con-medium');
    }

    const handleSmallGrid = () => {
        setClassNameState('shoppingCard-con');
    }


  return (
    <>
        <Navigator/>
        <div className='shopping-con' >

            <div className='shopping-sidebar-con'>
                <SidebarCard/>
            </div>

            <PictureBed 
                className={classNameState}
                bigGrid={handleBigGrid}
                medGrid={handleMediumGrid}
                smGrid={handleSmallGrid} 
                length={ClothingData.length}   
            />

        </div>
    </>
  )
}

export default Shopping