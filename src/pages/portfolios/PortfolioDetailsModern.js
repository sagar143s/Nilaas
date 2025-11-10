import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderTwo";
import Footer from "container/footer/FooterOne";
import PortfolioDetails from "container/portfolio-details/ModernPortfolioDetails";

const PortfolioDetailsModern = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Brands</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <PortfolioDetails/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioDetailsModern;
