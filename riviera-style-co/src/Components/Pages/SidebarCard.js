import React from 'react'
import { useState } from 'react'

function SidebarCard() {
const [choice, setChoice] = useState(true);
const handleClick = () => {
    setChoice(prev => !prev);
}

  return (
    choice ? <div 
        onClick={handleClick} 
        className='sidebar-card'> SidebarCard 
    </div> : 
    <div></div>
  )
}

export default SidebarCard