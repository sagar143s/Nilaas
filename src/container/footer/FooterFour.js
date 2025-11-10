import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Widget from "components/widget";
import Copyright from "components/footer/Copyright";
import socials from '../../data/socials';
import Logo from '../../assets/logo/Asset 10.png';

const FooterFour = () => {
    return (
        <footer className="page-footer bg-dark text-white py-5">
            <Container>
                <Row className="align-items-center mb-4">
                    {/* Logo */}
                    <Col lg={4} className="text-center text-lg-start mb-3 mb-lg-0">
                        <img src={Logo} alt="Nilaas Logo" style={{ maxWidth: "160px" }} />
                    </Col>

                    {/* Contact Info */}
                    <Col lg={4} className="text-center text-lg-start mb-3 mb-lg-0">
                        <Widget wrapClasses="menu--contact" title="Contact Us">
                            <p className="mb-1">
                                <a href="mailto:info@nilaas.in" className="text-white text-decoration-none">
                                    info@nilaas.in
                                </a>
                            </p>
                            <p className="mb-0">Calicut, Kerala, India</p>
                        </Widget>
                    </Col>

                    {/* Social Media */}
                    <Col lg={4} className="text-center text-lg-end">
                        <h6 className="mb-2">Follow us</h6>
                        <div className="d-flex justify-content-center justify-content-lg-end gap-3">
                            {socials.map(social => (
                                <a 
                                    key={social.id} 
                                    href={`https://${social.media}.com/${social.username}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-white fs-5"
                                >
                                    <i className={`fa fa-${social.media}`} />
                                </a>
                            ))}
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary" />

                {/* Copyright */}
                <Row className="pt-3 align-items-center">
                    <Col className="text-center">
                        <Copyright />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterFour;
