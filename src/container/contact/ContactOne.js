 import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import socialIcons from '../../data/socials';
import {toCapitalize} from "utils/toCapitalize";
import Input from "components/input";

const ContactOne = () => {
    return (
        <div className="bk-contact-area section-pb-xl bg_color--1">
            <Container>
                <Row>
                    

                    <Col xs={12} lg={12} xl={{span: 12, offset: 1}} className="mt_md--40 mt_sm--40">
                        <div className="contact-form">
                            <form action="/" className="form-style--1 wow move-up">
                                <div className="row">
                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-user-o"/>
                                            <Input
                                                type={"text"}
                                                name={"name"}
                                                placeholder={"Name*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-envelope-o"/>
                                            <Input
                                                type={"email"}
                                                name={"email"}
                                                placeholder={"Email*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <span className="form-icon fa fa-phone"/>
                                            <Input
                                                type={"text"}
                                                name={"phone"}
                                                placeholder={"Phone Number"}
                                                required={false}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="input-box">
                                            <Input
                                                type={"textarea"}
                                                name={"message"}
                                                placeholder={"Your message*"}
                                                required={true}
                                            />
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="form-action">
                                            <div className="form-description">
                                                I’m available for commissions and collaborations, and i’m <br/>
                                                excited to hear from you about new projects
                                            </div>
                                            <div className="form-submit">
                                                <Input
                                                    type={"submit"}
                                                    value={"Send Message"}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactOne;
