import React from 'react'
import '../Shopping/Shopping.css'
import PictureBed from '../../UIComponents/PictureBed/PictureBed'
import { useState } from 'react'
import ClothingData from '../../Data/ClothingData'

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
    <div className='shopping-con' >

        <PictureBed 
            className={classNameState}
            bigGrid={handleBigGrid}
            medGrid={handleMediumGrid}
            smGrid={handleSmallGrid} 
            length={ClothingData.length}
            title={'Clothing Styles'}   
        />

    </div>
  )
}

export default Shopping