import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AboutThumb from "components/about-us/thumbnail/AboutThumbOne";
import thumb from '../../assets/img/about/00005.jpg'

const AboutAuthenticStudio = () => {
    return (
        <div className="brook-about-area bg_color--1 ptb--120 ptb-md--80 ptb-sm--80">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="about-inner authentic-about pr--30">
                            <h6 className="heading heading-h6 theme-color wow move-up">WHO WE ARE</h6>
                            <div className="bk-separator--30"/>
                            <h3 className="heading heading-h3 heading-font line-height-1-5 wow move-up">
                                SHAPING KERALA’S FASHION SCENE WITH STYLE, QUALITY, AND EVERYDAY ELEGANCE.
                            </h3>

                            <div className="bk-separator--40"/>
                            <p className="bk_pra font-20 line-height-1-6 dark-2 heading-font2 wow move-up">
                                <strong>Nilaas</strong> is a Kerala-born fashion brand committed to bringing premium-quality apparel, footwear, and lifestyle essentials to everyday life. Through our multi-product platform <strong>Quickfynd.com</strong>, we combine modern trends, comfort, and craftsmanship to serve Kerala’s style-conscious community. Rooted in tradition yet inspired by contemporary design, Nilaas is redefining local fashion with creativity, quality, and authenticity.
                            </p>
                            <div className="bk-separator--65"/>

                            <div className="view-more-btn heading-color heading-font font-18 font-700 theme-color wow move-up">
                                <a 
                                    href="https://quickfynd.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <span>More about us</span>
                                    <span className="btn-arrow"/>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <AboutThumb
                            thumb={thumb}
                            className="about-thumb text-center text-lg-end mt_md--40 mt_sm--40"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutAuthenticStudio;
