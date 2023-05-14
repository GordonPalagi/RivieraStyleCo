import React from 'react'
import '../CSS/Pages/HomeCss.css'
import freeStock from '../Images/freeStock.avif'
import fallClothes from '../Images/fallClothes.avif'
import RightArrowData from '../Data/RightArrowData'
import LeftArrowData from '../Data/LeftArrowData'
import HeroCard from '../Models/HeroCard'
import SlimCard from '../Models/SlimCard'
import CatagorieData from '../Data/CatagorieData'
import blockCardData from '../Data/blockCardData'
import HeroPoster from '../Models/HeroPoster'
import { useState, useEffect, useRef } from 'react'
import { useIntersection } from '../CustomHooks/useIntersection'

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
    } else {
      setShouldSlideIn(false)
    }
  }, [isIntersecting])
  
  useEffect(() => {
    if(isLowerIntersecting) {
      setLowerSlideIn(true);
    } else {
      setLowerSlideIn(false)
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
        <SlimCard className={'slimCard-con'} catagorie={CatagorieData}/>
        <div className='between'><span className='most-wanted'>Tailored with you in mind</span></div>
        <SlimCard className={'threeCardSlim'} catagorie={blockCardData}/>
        {/* <div className='between'></div> */}
    </>
  )
}

export default Home