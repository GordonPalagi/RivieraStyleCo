import React from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { BiGridHorizontal } from 'react-icons/bi'
import { BiGridSmall } from 'react-icons/bi'
import ShoppingCard from '../Models/ShoppingCard'
import ClothingData from '../Data/ClothingData'
import '../CSS/Models/PictureBedCSS.css'




function PictureBed({bigGrid, medGrid, smGrid, className, length, title}) {


    return (
        <>
            <div className='picture-con'>

                <div className='size-adjust-con'>
                    <h2>{title}</h2>

                    <div className='size-icon-con'>
                        <button onClick={bigGrid} className='icon'><BiGridAlt size={24} /></button>
                        <button onClick={medGrid} className='icon'><BiGridHorizontal size={24} /></button>
                        <button onClick={smGrid} className='icon'><BiGridSmall size={24} /></button>
                    </div>

                </div>

                <div className={className}>
                    {ClothingData.slice(0, length).map((item, index) => {
                        return (
                            <ShoppingCard 
                                key={index} props={item}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PictureBed