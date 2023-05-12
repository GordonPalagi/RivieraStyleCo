import React from 'react'
import { useNavigate } from 'react-router'
import '../CSS/NavDropdownCSS.css';


function NavDropdown({ links, picture }) {
  const navigate = useNavigate();
    return (
      <div className='hover-wrapper'>
        <div className='hovered-box-con'>

          <ul className='li-con'>
            {links.map((link, index) => {
              return (
                <li onClick={() => navigate("/shopping")} key={index}>{link}</li>
              )
            })}
          </ul>

          <div className='banner-picture-con'>
            {picture.map((item, index) => {
              return <img key={index} className='inbed-banner-img' src={item} alt="" />
            })}
          </div>
        
        </div>
      </div>
    )
  }

export default NavDropdown



// const NavDropdown = ({array, dropdownState}) => {
//     // this is optional chaining. Essentially saying, if the item within the array is NOT null or undefined, then we assign this constant that object. in other words
//     // if array[HOVEREDLINKS] exists then assign it's 'links' property to the(this) 'links' constants.
//     // they should be different names, but the array should have a links property in it. Otherwise the  .links would change.
//     // if it is null or empty, instead of throwing an error, it just returns an empty array. This is a very nice feature to have. 
//     // this was introduce in the ECMAScript 2020 version.
//     const links = array[hoveredLink]?.links || [];
    
//     return (
//       <>
//       {dropdownState ? 
      
//       <div className="hover-wrapper">

//         <div className="hovered-box-con">

//           <div className="li-con">
//             {links.map((link, index) => (
//               <li key={index}>{link}</li>
//               ))}
//           </div>
//           <img className='banner-img' src={beauty} alt="" />
//         </div>

//       </div> 
      
      
//       : null}
//       </>
//     );
//   };