import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
// import ListItem from "components/list";

const WorkOne = ({ className }) => {
    return (
        <div className={`brook-what-do-area ptb--0 ptb-md--0 ptb-sm--0 bg_color--1 ${className}`}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-start">
                            <h5 className="heading heading-h5 theme-color">HISTORY</h5>
                            <div className="bk-separator--30" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <div className="what-do">
                            <p>
                                Founded in Kerala, <strong>Nilaas</strong> began its journey with a simple vision — to bring
                                premium-quality fashion closer to everyday life. What started as a local idea soon
                                grew into a brand that celebrates Kerala’s culture, creativity, and modern lifestyle.
                                With a focus on comfort, craftsmanship, and authenticity, Nilaas has quickly become
                                a name synonymous with trust and style in the region.
                            </p>
                        </div>

                        <div>
                            <p>
                                Under the Nilaas umbrella, new ventures like <strong>Quickfynd.com</strong> have expanded
                                the brand’s reach into multi-category retail — connecting fashion, lifestyle,
                                and innovation through one seamless shopping experience. Our journey continues
                                to evolve with a commitment to quality, sustainability, and empowering Kerala’s
                                fashion identity on a larger scale.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkOne;
