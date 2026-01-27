import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";
import LiningMain from "../../components/brands/quickfynd"

const Bossini = () => {
  return (
    <Fragment>
    <Helmet>
        <title>Brands</title>
    </Helmet>
    <LayoutDefault className="template-color-1 template-font-1">
        <Header/>
        <LiningMain/>
        <Footer/>
    </LayoutDefault>
</Fragment>
  )
}

export default Bossini