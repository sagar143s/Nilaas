import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";
import BossiniMain from "../../components/brands/shopcin"

const Bossini = () => {
  return (
    <Fragment>
    <Helmet>
        <title>Brands</title>
    </Helmet>
    <LayoutDefault className="template-color-1 template-font-1">
        <Header/>
        <BossiniMain/>
        <Footer/>
    </LayoutDefault>
</Fragment>
  )
}

export default Bossini