import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "components/list";

const WorkOne = ({ className }) => {
    return (
        <div className={`brook-what-do-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1 ${className}`}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-start">
                            <h5 className="heading heading-h5 theme-color">WHO WE ARE?</h5>
                            <div className="bk-separator--30" />
                            <h3 
                                className="heading heading-h3" 
                                style={{ padding: "0 0 18px 0" }}
                            >
                                KERALA’S OWN FASHION DESTINATION — NILAAS. STYLE, QUALITY & EVERYDAY ELEGANCE.
                            </h3>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <div className="what-do">
                            <ListItem
                                marker={null}
                                content={
                                    "Nilaas, a Kerala-based fashion brand, celebrates the spirit of everyday style with a focus on quality, comfort, and contemporary design. Under the Nilaas umbrella, our multi-product platform Quickfynd.com brings this vision to life by offering diverse lifestyle essentials for today’s generation. Rooted in Kerala, Nilaas embodies elegance, trust, and a passion for redefining local fashion."
                                }
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="mt--40 mt_md--20 mt_sm--5 bk-list">
                    {/* First row */}
                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--40">
                            <ListItem marker={null} content={"+ Local Roots, Global Vision."} />
                        </div>
                    </Col>

                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--40">
                            <ListItem marker={null} content={"+ Quality Living, One Outfit at a Time."} />
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className="what-do mt--40">
                            <ListItem marker={null} content={"+ Building Kerala’s Next Fashion Legacy."} />
                        </div>
                    </Col>

                    {/* Second row */}
                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Steps of Success, Styled with Purpose."} />
                        </div>
                    </Col>

                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Redefining Casual and Everyday Wear."} />
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Values Woven into Every Stitch."} />
                        </div>
                    </Col>

                    {/* Third row */}
                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Expanding Through Digital Innovation."} />
                        </div>
                    </Col>

                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Crafting Footwear and Fashion for Every Occasion."} />
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Adding Comfort, Style, and Confidence."} />
                        </div>
                    </Col>

                    {/* Fourth row */}
                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Leaders in Kerala’s Fashion Revolution."} />
                        </div>
                    </Col>

                    <Col xl={4} lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Fragrance and Lifestyle Redefined."} />
                        </div>
                    </Col>

                    <Col lg={3} md={4}>
                        <div className="what-do mt--10">
                            <ListItem marker={null} content={"+ Excellence in Fashion Marketing."} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkOne;
