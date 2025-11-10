import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "components/list";

const WorkOne = ({ className }) => {
    return (
        <div 
            className={`brook-what-do-area ptb--0 ptb-md--0 ptb-sm--0 bg_color--1 ${className}`} 
            style={{ padding: "0 20px" }}
        >
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="bk-title--default text-start">
                            <h5 className="heading heading-h5 theme-color">ACTIVITIES</h5>
                            <div className="bk-separator--30" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <div className="what-do">
                            <p>
                                At <strong>Nilaas</strong>, we are building Kerala’s very own fashion ecosystem — 
                                blending traditional roots with modern trends. From apparel and footwear to 
                                accessories and lifestyle essentials, our focus is to deliver high-quality 
                                products that reflect comfort, culture, and contemporary design. 
                            </p>
                            <p>
                                Through our digital platform <strong>Quickfynd.com</strong>, we are expanding the 
                                Nilaas vision into multi-category retail, offering everything from fashion to 
                                home and personal lifestyle products — all crafted with a commitment to quality 
                                and authenticity for the Kerala market.
                            </p>
                        </div>

                        <ul style={{ listStyle: "none", padding: "0 0 25px" }}>
                            <li>+ Nilaas Fashion – Modern apparel for men and women</li>
                            <li>+ Nilaas Footwear – Casual, comfort, and ethnic styles</li>
                            <li>+ Nilaas Lifestyle – Everyday essentials and accessories</li>
                            <li>+ Quickfynd.com – Multi-product shopping under one digital roof</li>
                            <li>+ Upcoming: Nilaas Fragrances & Home Style Collection</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkOne;
