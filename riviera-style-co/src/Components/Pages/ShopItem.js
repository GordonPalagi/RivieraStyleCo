import React from 'react'
import PictureBed from '../Models/PictureBed'
import { useState } from 'react'
import '../CSS/Pages/ShopItemCSS.css'

function ShopItem() {

    const [classNameState, setClassNameState] = useState('picture-bed-two');

    const handleBigGrid = () => {
        setClassNameState('picture-bed-two');
    }

    const handleMediumGrid = () => {
        setClassNameState('picture-bed-three');
    }

    const handleSmallGrid = () => {
        setClassNameState('picture-bed-four');
    }
  return (
    <div>
        <PictureBed 
            className={classNameState}
            bigGrid={handleBigGrid}
            medGrid={handleMediumGrid}
            smGrid={handleSmallGrid}
            length={4}
            title={'Clothing Styles'}
        />
    </div>
  )
}

export default ShopItem