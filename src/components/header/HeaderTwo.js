import React from 'react';
import Logo from "./elements/logo";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerOne";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

import logoWhite from 'assets/img/logo/Asset 8.png'

const HeaderTwo = () => {
    return (
        <HeaderContainer
            logoVersion={'light'}
            transparent={true}
            sticky={true}
            classes="position-from--top"
        >
            <div className="header-left" style={{ maxWidth: '120px' }}>
                <Logo logo={logoWhite}/>
            </div>

            <Navbar/>

            <div className="header-right flex-20">
                <HeaderConfig/>
            </div>
        </HeaderContainer>
    );
};

export default HeaderTwo;