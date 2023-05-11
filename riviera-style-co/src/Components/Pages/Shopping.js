import React from 'react'
import ShoppingCard from '../Models/ShoppingCard'
import '../CSS/ShoppingCSS.css'
import ClothingData from '../Data/ClothingData'
import SidebarCard from '../Models/SidebarCard'

function Shopping() {




  return (
    <div className='shopping-con' >

        <div className='shopping-sidebar-con'>
            <SidebarCard/>
        </div>

        <div className='picture-con'>
            <h2>Clothing Styles <span className='styleSpan'>({ClothingData.length} styles)</span></h2>

            <div className='picture-bed'>
                {ClothingData.map((item, index) => {
                    return <ShoppingCard key={index} props={item}/>
                })}
            </div>
            
        </div>


    </div>
  )
}

export default Shopping