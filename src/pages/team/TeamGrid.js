import React,{Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "layouts/LayoutDefault";
// import Header from "components/header/HeaderEight";
import TeamMembers from "container/team-member/pages/TeamMemberGrid";
import CallToAction from "container/call-to-action/pages/CallToActionTwo";
import Header from "components/header/HeaderThree";
import Footer from "container/footer/FooterFour";

const TeamGrid = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Wpmoda - Dubai's Leading Fashion Store | Shop the Latest Global Fashion Trends </title>
            </Helmet>

            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <TeamMembers/>
                <CallToAction bgColor="#fff"/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default TeamGrid;
