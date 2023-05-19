import React from 'react'
import Button from '../Button';
import '/Users/Gordon/Desktop/Projects/My_E-commerce_Website/riviera-style-co/src/Components/CSS/Models/ClothingDescriptionCSS.css'

const ClothingDescription = ({ clothingItem }) => {

    return (
        <div className='description-con'>
            <h1>{clothingItem.title}</h1>
            <h3>{clothingItem.price}</h3>
            <p>{clothingItem.description}</p>
            <div className='size-con'>
                {clothingItem.size.map((item) => (
                    <span>{item}</span>
                    ))}
            </div>
            <ul>
                {clothingItem.details.map((item) => (
                    <li>{item}</li>
                    ))}
            </ul>
            <p>{clothingItem.style}</p>
            <div className='add-to-cart-button-con'>
                <Button className='button-con' title={"Add to cart"} />
            </div>
        </div>
    )
};

export default ClothingDescription