import React from 'react'
import '../../Pages/ShopItem/ShopItem.css'

const SideImages = ({ clothingData, handleClick }) => (
    <div className='side-picture-con'>
      {clothingData.slice(0, 4).map((item) => (
        <img
          className='side-images'
          key={item.id}
          onClick={() => handleClick(item)}
          src={item.image}
          alt={item.description}
        />
      ))}
    </div>
  );

export default SideImages