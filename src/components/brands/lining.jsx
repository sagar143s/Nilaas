import React, { Fragment, useRef  } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/3.jpg";
import portDetailsData from "data/lining";

import Slider from "../../components/sliderbrands/Lining"



const ModernPortfolioDetails = () => {
    
    const videoRef = useRef(null);
      
    const handleVideoEnded = () => {
      if (videoRef.current) {
        // Reset the video to the beginning
        videoRef.current.currentTime = 0;
        // Start playing again
        videoRef.current.play();
      }
    };

    return (
        <>
        <Fragment>
            <Breadcrumb  bgImg={breadcrumbBg} />

            <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
                <Container>
                           <Row>
                        <Col lg={5}>
                            <div className="portfolio-left bk-portfolio-details">
                                <div className="portfolio-main-info">
                                    <h1 className="heading heading-h3 line-height-1-42">Li-Ning</h1>

                                    <div className="portfolio-details-list mt--60 mt_sm--30">
                                        {portDetailsData.meta.map(item => (
                                            <div className="details-list" key={item.id}>
                                                <label>{item.type}</label>
                                                <span><a href={`${process.env.PUBLIC_URL + "/"}`}>{item.text}</a></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="portfolio-content mt_sm--60 mt_md--80">
                                <h6 className="heading heading-h6">Beyond Us</h6>
                                <div className="desc mt--20">
                                    <p className="bk_pra">Li-Ning is the Chinese leader in athletic apparel and footwear, rooted in the vision of its founder and namesake, the champion gymnast, Mr. Li Ning. He founded the company in 1990 with the simple goal of providing Chinese athletes a national brand to wear on the world stage of the Olympics — historically one of the West’s rare portals into authentic Chinese culture. This modest intention has, 30 years later, led to the rise of a global sport pioneer. Residing at the forefront of 21st-century design and technology while celebrating its own, storied heritage, Li-Ning explores the tension between past and future, man and nature, exibility and strength. Yet it is ultimately driven by the boundless potential of the human body.
</p>
                                    <br/>
                                    <p className="bk_pra">Known for its commitment to quality, affordability, and versatility, Bossini has become a go-to destination for individuals seeking stylish yet budget-friendly clothing options. The brand's dedication to staying on top of the latest fashion trends while maintaining accessibility to a wide customer base has earned it a loyal following in the fashion world.</p>

                                  
                                </div>
                            </div>Apparals
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
               
                        <Row style={{padding:"50px 0"}}>
                           <Slider/>
                        </Row>
               <Container>
                    <Row className="mt--100 mt_md--80 mt_sm--60">
                        <Col lg={12}>
                            <div className="portfolio-nav-list">
                                <div className="portfolio-page prev">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/bossini"}`}>
                                            <p>Prev</p>
                                            <h3 className="heading heading-h3">Bossini<br/> FAMILY SHOPING STATION</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-page next mt_sm--30">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/peak"}`}>
                                            <p>Next</p>
                                            <h3 className="heading heading-h3">PEAK<br/> ULTIMATE SPORT SHOP</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Container>
            </div>
        </Fragment>
          
         
        </>
    );
};

export default ModernPortfolioDetails;
