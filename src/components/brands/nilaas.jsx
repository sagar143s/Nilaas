import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/bg-image-39.jpg";
import portDetailsData from "data/nilaas"; // Can be replaced with Nilaas data

const ModernPortfolioDetails = () => {
    return (
        <div className="brook-portfolio-details bg_color--1 ptb--0 ptb-md--0 ptb-sm--0">
            {/* Breadcrumb Section */}
            <Breadcrumb bgImg={breadcrumbBg} />

            <Container className="pt-5 pb-5"> {/* Add spacing inside container instead of top padding */}
                {/* Portfolio Header */}
                <Row>
                    <Col lg={5}>
                        <div className="portfolio-left bk-portfolio-details">
                            <div className="portfolio-main-info">
                                <h1 className="heading heading-h3 line-height-1-42">Nilaas</h1>

                                <div className="portfolio-details-list mt--60 mt_sm--30">
                                    {portDetailsData.meta.map(item => (
                                        <div className="details-list" key={item.id}>
                                            <label>{item.type}</label>
                                            <span><a href="/">{item.text}</a></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="portfolio-content mt_sm--60 mt_md--80">
                            <h6 className="heading heading-h6">Our Brand Story</h6>
                            <div className="desc mt--20">
                                <p className="bk_pra">
                                    Founded in 2025, <strong>Nilaas</strong> is a Kerala-born fashion brand created with a vision to bring premium-quality fashion closer to local communities. Inspired by Kerala’s culture, lifestyle, and evolving fashion sensibilities, Nilaas blends tradition with modern design to create timeless yet trendy collections.
                                </p>

                                <p className="bk_pra mt-3">
                                    Nilaas offers a complete fashion destination for <strong>men, women, and kids</strong>, covering everyday wear, casual outfits, ethnic-inspired styles, and modern fashion essentials. Every product is thoughtfully designed to balance comfort, durability, and contemporary aesthetics.
                                </p>

                                <p className="bk_pra mt-3">
                                    With a strong focus on quality craftsmanship and fabric selection, Nilaas ensures that each piece reflects attention to detail and long-lasting value. From stylish clothing and footwear to lifestyle fashion essentials, our collections are tailored for the dynamic lifestyle of today’s generation.
                                </p>

                                <p className="bk_pra mt-3">
                                    Rooted in Kerala and driven by creativity, <strong>Nilaas</strong> aims to grow as a trusted fashion brand that celebrates individuality, confidence, and authenticity—making premium fashion accessible for everyone.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Video Section */}
                {/* <Row className="mt--100 mt_md--80 mt_sm--60">
                    <Col lg={12}>
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            controls={false}
                            width="100%"
                            height="auto"
                            style={{ borderRadius: "25px" }}
                            onEnded={handleVideoEnded}
                        >
                            <source
                                src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1704880674/wpmoda/Bossini_Seasonal_V1_2_d7cvde.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row> */}

                {/* Slider Section */}
                {/* <Row style={{ padding: "50px 0" }}>
                    <Slider />
                </Row> */}

                {/* Portfolio Navigation */}
                {/* <Row className="mt--100 mt_md--80 mt_sm--60">
                    <Col lg={12}>
                        <div className="portfolio-nav-list d-flex justify-content-between flex-column flex-md-row">
                            <div className="portfolio-page prev mb-3 mb-md-0">
                                <div className="inner">
                                    <a href="/">
                                        <p>Prev</p>
                                        <h3 className="heading heading-h3">Previous Work</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-page next">
                                <div className="inner">
                                    <a href="/">
                                        <p>Next</p>
                                        <h3 className="heading heading-h3">Next Work</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default ModernPortfolioDetails;
