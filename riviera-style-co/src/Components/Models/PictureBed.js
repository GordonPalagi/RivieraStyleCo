import React from 'react'
import { BiGridAlt } from 'react-icons/bi'
import { BiGridHorizontal } from 'react-icons/bi'
import { BiGridSmall } from 'react-icons/bi'
import ShoppingCard from '../Models/ShoppingCard'
import ClothingData from '../Data/ClothingData'
import '../CSS/Models/PictureBedCSS.css'




function PictureBed({bigGrid, medGrid, smGrid, className, length}) {


    return (
        <>
            <div className='picture-con'>

                <div className='size-adjust-con'>

                    <div className='size-icon-con'>
                        <button onClick={smGrid} className='icon'><BiGridSmall size={24} /></button>
                        <button onClick={medGrid} className='icon'><BiGridHorizontal size={24} /></button>
                        <button onClick={bigGrid} className='icon'><BiGridAlt size={24} /></button>
                    </div>

                </div>

                <div className='picture-bed'>
                    {ClothingData.slice(0, length).map((item, index) => {
                        return (
                            <ShoppingCard 
                                className={className} 
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