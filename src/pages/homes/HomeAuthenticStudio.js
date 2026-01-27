import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import brook from "data/brook.json";
import LayoutDefault from "layouts/LayoutDefault";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";
import SliderAuthenticStudio from "container/slider/SliderAuthenticStudio";
import About from "container/about-us/AboutAuthenticStudio";
import Services from "container/service/ServiceSix";
import Portfolios from "container/portfolio/homes/PortfolioSeven";
import Marquee from "components/marquee/marquee";
import Video from "components/videos/home";

const HomeAuthenticStudio = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{`Nilaas || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault
                className="template-color-20 template-font-2 bg_color--1"
                revealFooter={false}
            >
                <Header />
                <SliderAuthenticStudio />
                <About />
                <Video />
                <Services />
                <Portfolios />
                {/* <Marquee />More about us */}
                <Footer />
            </LayoutDefault>
        </Fragment>
    );
};

export default HomeAuthenticStudio;