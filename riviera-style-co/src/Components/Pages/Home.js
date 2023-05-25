import React from 'react'
import '../CSS/Pages/HomeCss.css'
import freeStock from '../Images/freeStock.avif'
import fallClothes from '../Images/fallClothes.avif'
import RightArrowData from '../Data/RightArrowData'
import LeftArrowData from '../Data/LeftArrowData'
import HeroCard from '../Models/HeroCard'
import HeroPoster from '../Models/HeroPoster'
import { useState, useEffect, useRef } from 'react'
import { useIntersection } from '../CustomHooks/useIntersection'
import ClothingData from '../Data/ClothingData'
import { lazy, Suspense } from 'react'

const LazyCardSection = lazy(() => import('../Models/SlimCard.js'));

function Home() {
  const [shouldSlideIn, setShouldSlideIn] = useState(false);
  const [lowerSlideIn, setLowerSlideIn] = useState(false);
  const ref = useRef(null);
  const lowerRef = useRef(null);
  const isIntersecting = useIntersection(ref, {rootMargin: "-150px"})
  const isLowerIntersecting = useIntersection(lowerRef, {rootMargin: "-150px"})
  const title = <div>Newest <span className='titleStyle'>Fashion</span></div>
  const title2 = <div>Hottest <span className='titleStyle'>Trends</span></div>

  useEffect(() => {
    if(isIntersecting) {
      setShouldSlideIn(true);
    }
  }, [isIntersecting])
  
  useEffect(() => {
    if(isLowerIntersecting) {
      setLowerSlideIn(true);
    }
  }, [isLowerIntersecting])

  return (
    <>
      <HeroPoster title={"Riviera Style Co."}/>

      <div className='heroCard-con' ref={ref}>
          <HeroCard
              className={`upper-hero ${shouldSlideIn ? 'slide-in' : ''}`} 
              title={title} 
              array={RightArrowData} 
              photo={freeStock} 
              />
        </div>

        <div className='between'></div>

        <div ref={lowerRef}>
          <HeroCard
              className={`lower-hero ${lowerSlideIn ? 'slide-in' : ''}`} 
              title={title2} 
              array={LeftArrowData} 
              photo={fallClothes} 
              />
        </div>

        <div className='between'><span className='most-wanted'>Shop the most wanted</span></div>
        
        <div className='most-wanted-slimCard'>
          {ClothingData.slice(0, 4).map((item) => (
            <Suspense fallback={<div>Loading...</div>}>
                <LazyCardSection 
                  props={item} 
                  className='card-con' 
                  nav={'/shopping'}
                  state={false}
                  />
            </Suspense>
          ))}
        </div>
        
        <div className='between'><span className='most-wanted'>Tailored with you in mind</span></div>
        
        <div className='tailored-slimCard'>
          {ClothingData.slice(0, 3).map((item) => (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCardSection 
                props={item} 
                className='card-con' 
                nav='/shopping' 
                state={false}
                />
            </Suspense>
          ))}
        </div>

        <div className='between'>
          <span className='most-wanted'></span>
        </div>

    </>
  )
}

export default Home