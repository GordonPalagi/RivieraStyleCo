import React from 'react'
import { useState } from 'react';

const PhotoGallery = ({ clothingItem }) => {
  const [leftZoom, setLeftZoom] = useState(false);
  const [rightZoom, setRightZoom] = useState(false);


  const handleLeftZoom = () => {
    setLeftZoom(prev => !prev);
  }
  const handleRightZoom = () => {
    setRightZoom(prev => !prev);
  }

  return (
    <div className='photo-gallery-con'>
      <div className='image-wrapper'>
        <img 
          onClick={handleLeftZoom} 
          className={!leftZoom ? 'big-picture' : 'big-picture plus'} 
          src={clothingItem.image2} 
          alt={clothingItem.description} 
          />
      </div>
      <div className='image-wrapper'>
        <img 
          onClick={handleRightZoom} 
          className={!rightZoom ? 'big-picture' : 'big-picture plus'} 
          src={clothingItem.image} 
          alt={clothingItem.description} 
          />
      </div>
    </div>
  )
};

export default PhotoGallery