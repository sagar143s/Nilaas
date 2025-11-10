import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import portDetailsData from "data/ccilu"; // You can rename or replace this with Nilaas data
import breadcrumbBg from "assets/img/bg/1.jpg";
import Slider from "../../components/sliderbrands/ccilu"; // Replace with Nilaas slider if available

const ModernPortfolioDetails = () => {
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
            <Breadcrumb bgImg={breadcrumbBg} />

            <Container>
                {/* Portfolio Header */}
                <Row>
                    <Col lg={5}>
                        <div className="portfolio-left bk-portfolio-details">
                            <div className="portfolio-main-info">
                                <h1 className="heading heading-h3 line-height-1-42">NILAAS</h1>

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
                            <h6 className="heading heading-h6">Our Brand Vision</h6>
                            <div className="desc mt--20">
                                <p className="bk_pra">
                                    Nilaas is a Kerala-born fashion brand delivering premium-quality apparel, footwear, and lifestyle essentials. We combine modern trends, comfort, and craftsmanship to serve style-conscious communities.
                                </p>
                                <p className="bk_pra mt-3">
                                    Rooted in tradition yet inspired by contemporary design, Nilaas redefines local fashion with creativity, quality, and authenticity.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Video Section */}
                <Row className="mt--150 mt_md--120 mt_sm--100">
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
                                src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1701933786/hashgate/ourwork/media%20production/event%20coverage/4_ydgnfq_lj1zr9.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
            </Container>

            {/* Slider Section */}
            <Row style={{ padding: "50px 0" }}>
                <Slider />
            </Row>

            {/* Portfolio Navigation */}
            <Container>
                <Row className="mt--100 mt_md--80 mt_sm--60">
                    <Col lg={12}>
                        <div className="portfolio-nav-list d-flex justify-content-between">
                            <div className="portfolio-page prev">
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
                </Row>
            </Container>
        </div>
    );
};

export default ModernPortfolioDetails;
