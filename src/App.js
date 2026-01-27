import WOW from "wowjs";
import React, {useEffect} from 'react';
import ScrollToTop from "./utils/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogDetailsNoSidebar from "./pages/blog/BlogDetailsNoSidebar";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogRightSidebar from "./pages/blog/BlogRightSidebar";
import BlogLeftSidebar from "./pages/blog/BlogLeftSidebar";
import BlogWithoutSidebar from "./pages/blog/BlogWithoutSidebar";
import PortfolioDetailsModern from "./pages/portfolios/PortfolioDetailsModern";
import PortfolioDetailsRight from "./pages/portfolios/PortfolioDetailsRight";
import PortfolioDetailsLeft from "./pages/portfolios/PortfolioDetailsLeft";
import PortfolioFilterable from "./pages/portfolios/PortfolioFilterable";
import PortfolioAjaxLoading from "./pages/portfolios/PortfolioAjaxLoading";
import PortfolioMasonryWide from "./pages/portfolios/PortfolioMasonryWide";
import PortfolioMasonryBoxed from "./pages/portfolios/PortfolioMasonryBoxed";
import PortfolioMetroBoxed from "./pages/portfolios/PortfolioMetroBoxed";
import PortfolioMetroWide from "./pages/portfolios/PortfolioMetroWide";
import PortfolioWithCaption from "./pages/portfolios/PortfolioWithCaption";
import PortfolioGridWide from "./pages/portfolios/PortfolioGridWide";
import PortfolioGridBoxed from "./pages/portfolios/PortfolioGridBoxed";
import Error from "./pages/others/Error";
import Career from "./pages/others/Career";
import ComingSoon from "./pages/others/ComingSoon";
import Maintenance from "./pages/others/Maintenance";
import TeamCarousel from "./pages/team/TeamCarousel";
import TeamGrid from "./pages/team/TeamGrid";
import PricingTableTwo from "./pages/pricing/PricingTableTwo";
import PricingTableOne from "./pages/pricing/PricingTableOne";
import ContactClassic from "./pages/contact/ContactClassic";
import ServiceModern from "./pages/service/ServiceModern";
import ServiceClassic from "./pages/service/ServiceClassic";
import AboutPageOne from "./pages/about/AboutPageOne";
import ElementList from "./pages/elements/ElementList";
import ElementTypedText from "./pages/elements/ElementTypedText";
import ElementButton from "./pages/elements/ElementButton";
import ElementAccordion from "./pages/elements/ElementAccordion";
import ElementMessageBox from "./pages/elements/ElementMessageBox";
import ElementPopupVideo from "./pages/elements/ElementPopupVideo";
import ElementGallery from "./pages/elements/ElementGallery";
import ElementLightweightSlider from "./pages/elements/ElementLightweightSlider";
import ElementGradation from "./pages/elements/ElementGradation";
import ElementSocialIcons from "./pages/elements/ElementSocialIcons";
import ElementMaps from "./pages/elements/ElementMaps";
import ElementForms from "./pages/elements/ElementForms";
import ElementTabs from "./pages/elements/ElementTabs";
import ElementTestimonial from "./pages/elements/ElementTestimonial";
import ElementIconBox from "./pages/elements/ElementIconBox";
import ElementProgressbar from "./pages/elements/ElementProgressbar";
import ElementCounter from "./pages/elements/ElementCounter";
import ElementCountdownClock from "./pages/elements/ElementCountdownClock";
import ElementInstagramFeed from "./pages/elements/ElementInstagramFeed";
import ElementCallToAction from "./pages/elements/ElementCallToAction";
import ElementPricingTable from "./pages/elements/ElementPricingTable";
import ElementTeamMember from "./pages/elements/ElementTeamMember";
import ElementCarouselSlider from "./pages/elements/ElementCarouselSlider";
import ElementFlexibleImageSlider from "./pages/elements/ElementFlexibleImageSlider";
import HomeAuthenticStudio from "./pages/homes/HomeAuthenticStudio";
import Bossini from "./pages/brands/Bossini"
import CCilu from "./pages/brands/ccilu";
import Peak from "./pages/brands/peak";
import Argeville from "./pages/brands/argeville"
import Shopcin from './pages/brands/shopcin'
import Lining from "./pages/brands/Lining"
import './app.css'

const App = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-details-no-sidebar'}`}
                        element={<BlogDetailsNoSidebar/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-details'}`}
                        element={<BlogDetails/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-right-sidebar'}`}
                        element={<BlogRightSidebar/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog-left-sidebar'}`}
                        element={<BlogLeftSidebar/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/blog'}`}
                        element={<BlogWithoutSidebar/>}
                    />
                    
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-right-details'}`}
                        element={<PortfolioDetailsRight/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-details'}`}
                        element={<PortfolioDetailsLeft/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-filterable'}`}
                        element={<PortfolioFilterable/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-ajax-loading'}`}
                        element={<PortfolioAjaxLoading/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-masonry-wide'}`}
                        element={<PortfolioMasonryWide/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-masonry-boxed'}`}
                        element={<PortfolioMasonryBoxed/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-metro-boxed'}`}
                        element={<PortfolioMetroBoxed/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-metro-wide'}`}
                        element={<PortfolioMetroWide/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio1'}`}
                        element={<PortfolioWithCaption/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio-grid-wide'}`}
                        element={<PortfolioGridWide/>}
                    />
                   
                    <Route
                        path={`${process.env.PUBLIC_URL + '/career'}`}
                        element={<Career/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/coming-soon'}`}
                        element={<ComingSoon/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/maintenance'}`}
                        element={<Maintenance/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/team-carousel'}`}
                        element={<TeamCarousel/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/team'}`}
                        element={<TeamGrid/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/pricing-table-two'}`}
                        element={<PricingTableTwo/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/pricing-table'}`}
                        element={<PricingTableOne/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/service-modern'}`}
                        element={<ServiceModern/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/service-classic'}`}
                        element={<ServiceClassic/>}
                    />
                  
                 
                 
                 
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/list"}`}
                        element={<ElementList/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/typed-text"}`}
                        element={<ElementTypedText/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/button"}`}
                        element={<ElementButton/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/accordion"}`}
                        element={<ElementAccordion/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/message-box"}`}
                        element={<ElementMessageBox/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/popup-video"}`}
                        element={<ElementPopupVideo/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gallery"}`}
                        element={<ElementGallery/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/lightweight-slider"}`}
                        element={<ElementLightweightSlider/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/gradation"}`}
                        element={<ElementGradation/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/social-icon"}`}
                        element={<ElementSocialIcons/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/map"}`}
                        element={<ElementMaps/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/form"}`}
                        element={<ElementForms/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/tab"}`}
                        element={<ElementTabs/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/testimonial"}`}
                        element={<ElementTestimonial/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/icon-box"}`}
                        element={<ElementIconBox/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/progressbar"}`}
                        element={<ElementProgressbar/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/counter"}`}
                        element={<ElementCounter/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/countdown-clock"}`}
                        element={<ElementCountdownClock/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/instagram-feed"}`}
                        element={<ElementInstagramFeed/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/call-to-action"}`}
                        element={<ElementCallToAction/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/pricing-table"}`}
                        element={<ElementPricingTable/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/team-member"}`}
                        element={<ElementTeamMember/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/carousel-slider"}`}
                        element={<ElementCarouselSlider/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/element/flexible-image-slider"}`}
                        element={<ElementFlexibleImageSlider/>}
                    />
                 
                       <Route
                        path={`${process.env.PUBLIC_URL + '/about'}`}
                        element={<AboutPageOne/>}
                    />
                   <Route
                        path={`${process.env.PUBLIC_URL + '/portfolio'}`}
                        element={<PortfolioGridBoxed/>}
                    />
                      <Route
                        path={`${process.env.PUBLIC_URL + '/contact'}`}
                        element={<ContactClassic/>}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + '/nilaas'}`}
                        element={<Bossini/>}
                    />
                     <Route
                        path={`${process.env.PUBLIC_URL + '/Peak'}`}
                        element={<Peak/>}
                    />
                     <Route
                        path={`${process.env.PUBLIC_URL + '/Argeville'}`}
                        element={<Argeville/>}
                    />
                     <Route
                        path={`${process.env.PUBLIC_URL + '/quickfynd'}`}
                        element={<Lining/>}
                    />
                     <Route
                        path={`${process.env.PUBLIC_URL + '/ccilu'}`}
                        element={<CCilu/>}
                    />
                      <Route
                        path={`${process.env.PUBLIC_URL + '/shopcin'}`}
                        element={<Shopcin/>}
                    />
                         <Route
                        path={`${process.env.PUBLIC_URL + '/brands'}`}
                        element={<PortfolioDetailsModern/>}
                    />
                  
                    <Route
                        path={`${process.env.PUBLIC_URL + '/'}`}
                        element={<HomeAuthenticStudio/>}
                    />
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </ScrollToTop>
        </Router>
    );
};

export default App;