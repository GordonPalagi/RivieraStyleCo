import React from 'react'
import PictureBed from '../Models/PictureBed'
import { useState } from 'react'
import '../CSS/Pages/ShopItemCSS.css'

function ShopItem() {

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
    <div>
        <PictureBed 
            className={classNameState}
            bigGrid={handleBigGrid}
            medGrid={handleMediumGrid}
            smGrid={handleSmallGrid}
            length={4}
        />
    </div>
  )
}

export default ShopItem