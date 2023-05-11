import React from 'react'
import ShoppingCard from '../Models/ShoppingCard'
import '../CSS/ShoppingCSS.css'
import ClothingData from '../Data/ClothingData'
import SidebarCard from '../Models/SidebarCard'
import Navigator from '../Models/Navigator'
import { BiGridAlt } from 'react-icons/bi'
import { BiGridHorizontal } from 'react-icons/bi'
import { BiGridSmall } from 'react-icons/bi'
import { useState } from 'react'

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

            <div className='picture-con'>
                <div className='size-adjust-con'>
                    <h2>Clothing Styles <span className='styleSpan'>({ClothingData.length} styles)</span></h2>

                    <div className='size-icon-con'>
                        <div onClick={() => handleSmallGrid()} className='icon'><BiGridSmall size={24} /></div>
                        <div onClick={() => handleMediumGrid()} className='icon'><BiGridHorizontal size={24} /></div>
                        <div onClick={() => handleBigGrid()} className='icon'><BiGridAlt size={24} /></div>
                    </div>

                </div>

                <div className='picture-bed'>
                    {ClothingData.map((item, index) => {
                        return <ShoppingCard className={classNameState} key={index} props={item}/>
                    })}
                </div>
            </div>


        </div>
    </>
  )
}

export default Shopping