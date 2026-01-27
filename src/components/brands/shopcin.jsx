import React, { Fragment, useRef  } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/5.jpg";
import portDetailsData from "data/shopcin";

import Slider from "../../components/sliderbrands/shopcin"



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
            <Breadcrumb bgImg={breadcrumbBg} />

            <div className="brook-portfolio-details bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
                <Container>
                           <Row>
                        <Col lg={5}>
                            <div className="portfolio-left bk-portfolio-details">
                                <div className="portfolio-main-info">
                                    <h1 className="heading heading-h3 line-height-1-42">Shopcin</h1>

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
                                    <p className="bk_pra">The White Pearl Fashion LLC is a fashion apparel, sportswear,
footwear & fragrance retail conglomerate residing at the crossroads
of the modern economy Dubai, United Arab Emirates, today the
group caters to thousands of eager shoppers through more than 60
stores & wholesale trading.</p>
                                    <br/>
                                    <p className="bk_pra">The White Pearl Fashion LLC operates Brands from around the
world,originating from USA, Europe, Asia which includes leading
names such as Li-Ning, Peak, Bossini, CCILU, Beppi, Argeville,
Pierre Roche Perfumes.</p>

                                  
                                </div>
                            </div>
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
            src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1704790102/wpmoda/shopcin_a5mquk.mp4"
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
                                        <a href={`${process.env.PUBLIC_URL + "/argeville"}`}>
                                            <p>Prev</p>
                                            <h3 className="heading heading-h3">ARGEVILLE<br/>CREATING TOMORROW'S FRAGRANCES</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-page next mt_sm--30">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/nilaas"}`}>
                                            <p>Next</p>
                                            <h3 className="heading heading-h3">Bossini<br/> FAMILY SHOPING STATIONqqq</h3>
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
