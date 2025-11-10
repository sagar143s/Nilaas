// import React from 'react';
// import navbarData from "data/navbar"
// import Anchor from "components/anchor"

// const NavbarItem = () => {
//     return (
//         navbarData.map(navbar => (
//             <li key={navbar.id}
//                 className={`label-1 ${navbar.megaMenu || navbar.subMenu ? 'with--drop' : ''} ${navbar.megaMenu ? 'slide--megamenu' : ''} ${navbar.subMenu ? 'slide-dropdown' : ''}`}>
//                 <Anchor path={`${process.env.PUBLIC_URL + navbar.link}`}><span>{navbar.title}</span></Anchor>
               
//             </li>
//         ))
//     );
// };

// export default NavbarItem;



import React from 'react'

const NavbarItem = () => {
  return (
  <>
  <ul style={{display:"flex",gap:"2rem",color:"#fff"}}>
    <li><a href='./'>Home</a></li>
    {/* <li><a href='./team'>Teams</a></li> */}
    <li><a href='./about'>About Us</a></li>
    <li><a href='./portfolio'>Portfolios</a></li>
    <li><a href='./contact'>Contact Us</a></li>
  </ul>
  </>
  )
}

export default NavbarItem