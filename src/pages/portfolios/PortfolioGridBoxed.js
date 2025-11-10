import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/0002.jpg";
// import Portfolios from "container/portfolio/pages/PortfolioGrid";
import Portfolios from "container/portfolio/homes/PortfolioSeven";
// import Footer from "container/footer/FooterOne";

const PortfolioGridBoxed = () => {
    return (
        <Fragment>
            <Helmet>
                <title>WPmoda</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                bgImg={breadcrumbBg}
                  
                />
                <div  style={{padding:"50px 0 0 0"}}>
                <Portfolios wide={false}/>
                </div>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioGridBoxed;
