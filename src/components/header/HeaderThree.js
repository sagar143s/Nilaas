import React from "react";
import Logo from "../../assets/logo/Asset 10.png";
import Navbar from "./elements/navbar/Navbar";
import HeaderContainer from "container/header/HeaderContainerOne";
import HeaderConfig from "components/header/elements/config/HeaderConfigOne";

const HeaderThree = () => {
  return (
    <HeaderContainer logoVersion="light" transparent sticky>
      <div className="header-left flex-20" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <img
          src={Logo}
          alt="Nilaas Logo"
          width={100}
          style={{
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <div className="header-flex-right flex-80">
        <Navbar />
        <HeaderConfig />
      </div>
    </HeaderContainer>
  );
};

export default HeaderThree;
