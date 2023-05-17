import React from 'react'
import { useState } from 'react'
import '../CSS/Pages/ShopItemCSS.css'
import ClothingData from '../Data/ClothingData.js'


function ShopItem() {

    const [clothingItem, setClothingItem] = useState(ClothingData[0])
    
    const handleClick = (item) => {
        setClothingItem(item);
    }
    
    
  return (
    <div className='full-shopItem-con'>
        <div className='photo-gallery-con'>
            
            <img className='big-picture' src={clothingItem.image2} alt={clothingItem.description} />
            <img className='big-picture' src={clothingItem.image} alt={clothingItem.description} />

            <div className='side-picture-con'>
                {ClothingData.slice(0, 4).map((item) => (
                    <img
                        className='side-images'
                        key={item.id}
                        onClick={() => handleClick(item)} 
                        src={item.image} alt={item.description} 
                    />
                ))} 
            </div>

        </div>
        <div className='description-con'>
            <h1>{clothingItem.title}</h1>
            <p>{clothingItem.price}</p>
            <p>{clothingItem.description}</p>
            <div className='size-con'>{clothingItem.size.map((item) => (
                <span>{item}</span>
                ))}
            </div>
            <ul>{clothingItem.details.map((item) => (
                <li>{item}</li>
            ))}</ul>
            <p>{clothingItem.style}</p>
        </div>
    </div>
  )
}

export default ShopItem