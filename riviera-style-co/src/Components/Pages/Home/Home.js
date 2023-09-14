import React from 'react'
import '../Home/Home.css'
import freeStock from '../../Assets/freeStock.avif'
import beautyAndBrains from '../../Assets/beautyAndBrains.avif'
import dressyFashion from '../../Assets/dressyFashion.avif'
import outerWear from '../../Assets/OuterWear.avif'
import fallClothes from '../../Assets/fallClothes.avif'
import RightArrowData from '../../Data/RightArrowData'
import LeftArrowData from '../../Data/LeftArrowData'
import HeroCard from '../../UIComponents/HeroCard/HeroCard'
import HeroPoster from '../../UIComponents/HeroPoster/HeroPoster'
import { useState, useEffect, useRef } from 'react'
import { useIntersection } from '../../CustomHooks/useIntersection'
import ClothingData from '../../Data/ClothingData'
import { lazy, Suspense } from 'react'
import { motion, useAnimation } from 'framer-motion'
const LazyCardSection = lazy(() => import('../../UIComponents/SlimCard/SlimCard'));

function Home() {
  const [shouldSlideIn, setShouldSlideIn] = useState(false);
  const [lowerSlideIn, setLowerSlideIn] = useState(false);
  const ref = useRef(null);
  const lowerRef = useRef(null);
  const isIntersecting = useIntersection(ref, {rootMargin: "-150px"})
  const isLowerIntersecting = useIntersection(lowerRef, {rootMargin: "-150px"})
  const title = <div>Newest <span><em>Fashion</em></span></div>
  const title2 = <div>Hottest <span><em>Trends</em></span></div>
  const [photo1, setPhoto1] = useState(freeStock);
  const [photo2, setPhoto2] = useState(fallClothes);

  const photoArr = [fallClothes, freeStock, beautyAndBrains, dressyFashion, outerWear]

  useEffect(() => {
    const randomArr = Math.floor(Math.random() * photoArr.length);
    const randomArr1 = Math.floor(Math.random() * photoArr.length);
    const foto = photoArr[randomArr];
    const foto1 = photoArr[randomArr1];
    const timer = setTimeout(() => {
      if (foto === foto1) {
        setPhoto2(foto1 + 1)
      }
      setPhoto1(foto)
      setPhoto2(foto1)
    }, 8000)

    return () => {
      clearTimeout(timer)
    }
  },[photo1, photo2])

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

    <div className='heroCard-con'>

      <div ref={ref}>
          <HeroCard
              className={`upper-hero ${shouldSlideIn ? 'slide-in' : ''}`}
              title={title} 
              array={RightArrowData} 
              photo={photo1} 
              />
      </div>
        <div ref={lowerRef}>
          <HeroCard
              className={`lower-hero ${lowerSlideIn ? 'slide-in' : ''}`} 
              title={title2} 
              array={LeftArrowData} 
              photo={photo2} 
              />
        </div>
    </div>

        <div className='between'><span className='most-wanted'>Shop the most wanted</span></div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <div className='most-wanted-slimCard'>
            {ClothingData.slice(0, 4).map((item, i) => (
              <LazyCardSection 
                    key={i}
                    dataSource={item} 
                    className='most-wanted-card-con' 
                    photoSize='slimCard-photo'
                    nav={'/shopping'}
                    addButton={false}
                  />
            ))}
          </div>
          
          <div className='between'><span className='most-wanted'>What you want, when you want it</span></div>
          
          <div className='tailored-slimCard'>
            {ClothingData.slice(0, 3).map((item, i) => (
                <LazyCardSection 
                  key={i}
                  dataSource={item} 
                  className='tailored-card-con'
                  photoSize='tailored-photo'
                  nav='/shopping' 
                  addButton={false}
                  />
                  ))}
          </div>
        </Suspense>

        {/* <div className='between'> */}
          {/* <span className='most-wanted'></span> */}
        {/* </div> */}

    </>
  )
}

export default Home