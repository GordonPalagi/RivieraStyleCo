import React from 'react';
import { useState } from 'react';
import '../CSS/Pages/ShopItemCSS.css';
import ClothingData from '../Data/ClothingData.js';
import PhotoGallery from '../Models/ShopItem/PhotoGallery';
import ClothingDescription from '../Models/ShopItem/ClothingDescription';
import SideImages from '../Models/ShopItem/SideImages';
import SlimCard from '../Models/SlimCard';

function ShopItem() {
  const [clothingItem, setClothingItem] = useState(ClothingData[0]);

  const handleClick = (item) => {
    setClothingItem(item);
  };

  return (
    <div className='full-shopItem-con'>
        <div className='shopItem-con'>
            <SideImages clothingData={ClothingData} handleClick={handleClick} />
            <PhotoGallery clothingItem={clothingItem} />
            <ClothingDescription clothingItem={clothingItem} />
        </div>

        <div className='suggest-con'>
            <h3>You might also like</h3>
            <div className='suggest-con-inner'>
                {ClothingData.map((item) => (
                    <SlimCard 
                        props={item} 
                        className={'card-con'} 
                        nav={'/shopping'} 
                        state={true}
                    />
                ))}
            </div>
        </div>

    </div>
  );
}

export default ShopItem;
