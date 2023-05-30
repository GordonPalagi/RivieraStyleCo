import React from 'react'
import { useNavigate } from 'react-router'
import '../CSS/Models/SlimCardCss.css'
import Button from './Button';
import CardDetails from '../Models/CardDetails.js';

function SlimCard({dataSource, className, nav, addButton, photoSize}) {
  const navigate = useNavigate();



  return (
        <div className={className}>
          <img 
              onClick={() => navigate(nav)} 
              className={photoSize} 
              src={dataSource.image} 
              alt={dataSource.description}
          />
          {addButton && <Button className='photo-cover-button' title="Add"/>}
          
          {addButton ? 
            <CardDetails title={dataSource.title} price={dataSource.price} />
              : 
            <span>{dataSource.catagorie}</span>
          }
        </div>
  )
}

export default SlimCard