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

function Home() {

  const title = <div>Newest <span className='titleStyle'>Fashion</span></div>
  const title2 = <div>Hottest <span className='titleStyle'>Trends</span></div>
  
  
useEffect(() => {
    if (!isIntersecting) {
        sidebarRef.current.querySelectorAll('sidebar-ul-con').forEach(el => {
            el.classList.add('slide-in');
        })
    } else {
        sidebarRef.current.querySelectorAll('sidebar-ul-con').forEach(el => {
            el.classList.remove('slide-in');
        })
    }
})


  return (
    <>
      <HeroPoster title={"Riviera Style Co."}/>

      <div ref={ref}>
        <HeroCard 
            className='upper-hero' 
            title={title} 
            array={RightArrowData} 
            photo={freeStock} 
            />
      </div>

      <div className='between'></div>

      <div ref={ref}>
        <HeroCard 
            className='lower-hero' 
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