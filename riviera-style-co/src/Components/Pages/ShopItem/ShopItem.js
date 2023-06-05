import React from 'react';
import { useState } from 'react';
import '../ShopItem/ShopItem.css'
import ClothingData from '../../Data/ClothingData.js';
import PhotoGallery from '../../UIComponents/PhotoGallery/PhotoGallery'
import ClothingDescription from '../../UIComponents/ClothingDescription/ClothingDescription';
import SideImages from '../../UIComponents/SideImages/SideImages';
import SlimCard from '../../UIComponents/SlimCard/SlimCard';

function ShopItem() {
  const [clothingItem, setClothingItem] = useState(ClothingData[0]);

  const handleClick = (item) => {
    setClothingItem(item);
  };

  const shopItem =
    <div className='shopItem-con'>
        <SideImages clothingData={ClothingData} handleClick={handleClick} />
        <div className='clothing-photoGallery-con'>
          <PhotoGallery clothingItem={clothingItem} />
          <ClothingDescription clothingItem={clothingItem} />
        </div>
    </div>
  




  return (
    <div className='full-shopItem-con'>
       {shopItem}
        <div className='suggest-con'>
            <h3>You might also like</h3>
            <div className='suggest-con-inner'>
                {ClothingData.map((item) => (
                    <SlimCard 
                        dataSource={item} 
                        className={'suggest-card-con'} 
                        photoSize='slimCard-photo-gallery'
                        nav={'/shopping'} 
                        addButton={true}
                    />
                ))}
            </div>
        </div>

    </div>
  );
}

export default ShopItem;
