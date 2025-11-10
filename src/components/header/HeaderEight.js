import React from 'react';
import Logo from "../../assets/logo/Asset 3.png";
import Navbar from "./elements/navbar/Navbar";
import HeaderConfig from "./elements/config/HeaderConfigTwo";
import HeaderContainer from "container/header/HeaderContainerOne";

import logo from 'assets/img/logo/brook-black.png'

const HeaderEight = () => {
    return (
        <HeaderContainer
            logoVersion={'black'}
            transparent={true}
            sticky={true}
        >
            <div className="header-left">
                <Logo logo={logo}/>
            </div>

            <Navbar/>

            <div className="header-right flex-20">
                {/* <HeaderConfig/> */}
            </div>
        </HeaderContainer>
    );
};

export default HeaderEight;