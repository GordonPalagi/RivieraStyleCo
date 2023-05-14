import React from 'react'
import '../CSS/Pages/ShoppingCSS.css'
import SidebarCard from '../Models/SidebarCard'
import Navigator from '../Models/Navigator'
import PictureBed from '../Models/PictureBed'
import { useState } from 'react'
import ClothingData from '../Data/ClothingData'



function Shopping() {


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
                title={'Clothing Styles'}   
            />

        </div>
    </>
  )
}

export default Shopping