import React, { Fragment, useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/3.jpg";
import portDetailsData from "data/lining";

import Slider from "../sliderbrands/Lining";

const ModernPortfolioDetails = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <Fragment>
      <Breadcrumb bgImg={breadcrumbBg} />

      <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="portfolio-left bk-portfolio-details">
                <div className="portfolio-main-info">
                  <h1 className="heading heading-h3 line-height-1-42">
                    Quickfynd
                  </h1>

                  <div className="portfolio-details-list mt--60 mt_sm--30">
                    {portDetailsData.meta.map(item => (
                      <div className="details-list" key={item.id}>
                        <label>{item.type}</label>
                        <span>
                          <a href={`${process.env.PUBLIC_URL + "/"}`}>
                            {item.text}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="portfolio-content mt_sm--60 mt_md--80">
                <h6 className="heading heading-h6">
                  Smart Commerce. Faster Living.
                </h6>

                <div className="desc mt--20">
                  <p className="bk_pra">
                    <strong>Quickfynd</strong> is a next-generation e-commerce
                    platform developed under the <strong>Nillaas</strong>
                    ecosystem, designed to redefine how customers discover,
                    shop, and receive products online. Built with speed,
                    convenience, and trust at its core, Quickfynd connects
                    customers with verified sellers and brands through a
                    seamless digital shopping experience.
                  </p>

                  <br />

                  <p className="bk_pra">
                    The platform focuses on <strong>fast delivery</strong>,
                    <strong>competitive pricing</strong>, and
                    <strong>localized fulfillment</strong>, enabling customers
                    to find what they need quickly—without compromising on
                    quality. From fashion and electronics to daily essentials,
                    Quickfynd ensures every product meets strict quality and
                    seller standards.
                  </p>

                  <br />

                  <p className="bk_pra">
                    Powered by modern technology and scalable infrastructure,
                    Quickfynd supports smart search, personalized
                    recommendations, secure payments, and real-time order
                    tracking. As part of Nillaas, it reflects a vision of
                    building reliable digital commerce solutions that empower
                    both consumers and local businesses to grow together.
                  </p>
                </div>
              </div>
              <strong>Categories:</strong> Fashion · Electronics · Daily Needs · Lifestyle
            </Col>
          </Row>

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
                  src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1704808681/wpmoda/Shopcin_15_sec_add_wp_hw11xi.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>

        <Row style={{ padding: "50px 0" }}>
          <Slider />
        </Row>

        
      </div>
    </Fragment>
  );
};

export default ModernPortfolioDetails;
