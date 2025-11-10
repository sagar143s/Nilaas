import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Thumb from "components/about-us/thumbnail/AboutThumbOne";
import thumb from "assets/img/about/2.jpg";
import TypedText from "components/typed-text";

const ServiceSix = () => {
    return (
        <div className="brook-service-area bg_color--14 py-5">
            <Container>
                <Row className="align-items-center flex-column-reverse flex-lg-row">
                    
                    {/* Text Content */}
                    <Col xs={12} lg={6} className="mt-4 mt-lg-0">
                        <div className="service-content">
                            <h6 className="heading heading-h6 theme-color letter-spacing-3 mb-3">
                                OUR SERVICES
                            </h6>
                            <h1 className="heading heading-h1 heading-font mb-3">
                                Elevate Kerala Style,<br /> Transform Everyday Fashion
                                <span className="cd-words-wrapper theme-color d-block mt-2">
                                    <TypedText
                                        content={[
                                            'Ignite Local Creativity.',
                                            'Empower Everyday Style.',
                                            'Redefine Fashion Trends.'
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        loop={true}
                                    />
                                </span>
                            </h1>
                            <p className="bk_pra font-16">
                                <strong>Nilaas</strong> brings premium-quality apparel, footwear, and lifestyle essentials designed for Kerala’s modern fashion enthusiasts. 
                                Through our platform{' '}
                                <a 
                                    href="https://quickfynd.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ color: '#FF5A5F', textDecoration: 'underline' }}
                                >
                                    Quickfynd.com
                                </a>,{' '}
                                we offer a seamless shopping experience, blending style, comfort, and innovation for everyday life.
                            </p>
                        </div>
                    </Col>

                    {/* Image Thumb */}
                    <Col xs={12} lg={6} className="text-center text-lg-end">
                        <Thumb
                            thumb={thumb}
                            className="service-thumb w-100"
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ServiceSix;
