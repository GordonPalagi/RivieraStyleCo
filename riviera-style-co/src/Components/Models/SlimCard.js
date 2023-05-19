import React from 'react'
import { useNavigate } from 'react-router'
import '../CSS/Models/SlimCardCss.css'
import Button from './Button';
import CardDetails from '../Models/CardDetails.js';

function SlimCard({props, className, nav, state}) {
  const navigate = useNavigate();



  return (
        <div className={className}>
          <img onClick={() => navigate(nav)} className='slimCard-photo' src={props.image} alt={props.description}/>
          {state && <Button className='photo-cover-button' title="Add"/>}
          {state ? 
            <CardDetails title={props.title} price={props.price} />
              : 
            <span>{props.catagorie}</span>
          }
        </div>
  )
}

export default SlimCard