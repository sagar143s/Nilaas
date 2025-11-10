import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderEight";
import Footer from "container/footer/FooterOne";
import PortfolioDetails from "container/portfolio-details/PortfolioDetails";

const PortfolioDetailsLeft = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Wpmoda - Dubai's Leading Fashion Store | Shop the Latest Global Fashion Trends </title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <PortfolioDetails position="left"/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioDetailsLeft;
