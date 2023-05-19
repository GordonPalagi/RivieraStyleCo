import React from 'react'

const PhotoGallery = ({ clothingItem }) => (
    <div className='photo-gallery-con'>
      <img className='big-picture' src={clothingItem.image2} alt={clothingItem.description} />
      <img className='big-picture' src={clothingItem.image} alt={clothingItem.description} />
    </div>
);

export default PhotoGallery