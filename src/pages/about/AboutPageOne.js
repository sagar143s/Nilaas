import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import PageContainer from "container/page";
import Header from "components/header/HeaderTwo";
import FooterOne from "container/footer/FooterFour";
import PopupSearch from "components/popup/PopupSearch";
import PopupMobileMenu from "components/popup/PopupMobileMenu";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/bg-image-11.jpg";
import WorkArea from "container/work/WorkOne";
import ClientLogo from "container/client-logo/homes/ClientLogoThree";
// import SkillsArea from "container/skills/SkillsOne";
// import FlexibleImageSlider from "container/flexible-image-slider/FlexibleImageSliderOne";
// import Services from "container/service/ServiceSeven";
// import Testimonial from "container/testimonial/homes/TestimonialFive";
// import ClientLogo from "container/client-logo/homes/ClientLogoOne";
// import CallToAction from "container/call-to-action/pages/CallToActionOne";
// import FooterOne from "container/footer/FooterOne";
import Worksecond from "container/work/worksecond"
import Activities from "container/work/activities"
// import Videomain from "container/work/video"
import { Container } from 'react-bootstrap';
import TeamMembers from "container/team-member/pages/TeamMemberGrid";
import Video from '../../components/videos/aboutus'
import Marquee from '../../components/about-us/marquee/page'

const AboutPageOne = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Wpmoda - About Us</title>
            </Helmet>

            <PageContainer classes="template-color-1 template-font-1" revealFooter={false}>
                <Header/>
                <PopupSearch/>
                <PopupMobileMenu/>
                <Breadcrumb
          
        bgImg={breadcrumbBg} />
         
                <WorkArea/>
                <Worksecond/>
                {/* <SkillsArea/> */}
                {/* <FlexibleImageSlider/> */}
                <Marquee/>
                <Activities/>
                <ClientLogo/>
                <Video/>
                <TeamMembers/>
                <Container>
                {/* <Videomain/> */}
                </Container>
                {/* <ClientLogo/> */}
                {/* <Services/> */}
                {/* <Testimonial/> */}
             
                {/* <CallToAction bgColor={"#0038E3"}/> */}
                <FooterOne/>
            </PageContainer>
        </Fragment>
    );
};

export default AboutPageOne;