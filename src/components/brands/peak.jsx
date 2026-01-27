import React, { Fragment, useRef  } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "components/breadcrumb/BreadcrumbTwo";
import breadcrumbBg from "assets/img/bg/2.jpg";
import portDetailsData from "data/peak";

import Slider from "../../components/sliderbrands/peak"

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
                                    <h1 className="heading heading-h3 line-height-1-42">NILAAS</h1>

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
                                <h6 className="heading heading-h6">ABOUT THE PROJECT</h6>
                                <div className="desc mt--20">
                                    <p className="bk_pra">Peak Sport Products Co., Limited (Chinese: 匹克; pinyin: Pǐ Kè) was founded in 1989 and is headquartered in Quanzhou City, Fujian Province, China. It is mainly engaged in the product design, development, manufacturing, distribution and promotion of the "PEAK" sports brand ( Including sports shoes, clothing and accessories), has nearly 30 years of professional research and development, manufacturing and sales experience. Peak has more than 5,000 retail outlets in China, and has more than 100 distributors and more than 1,000 distribution outlets overseas. It has established an international brand operation system integrating production and sales, and its business covers Europe, the United States, Asia, Africa, and Australia on five continents. Many countries and regions.</p>

                                  
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
            src="https://res.cloudinary.com/dzwyhgoer/video/upload/v1701933786/hashgate/ourwork/media%20production/event%20coverage/4_ydgnfq_lj1zr9.mp4"
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
                                        <a href={`${process.env.PUBLIC_URL + "/li-ning"}`}>
                                            <p>Prev</p>
                                            <h3 className="heading heading-h3">Li-Ning<br/>MAKE YOUR OWN WAY</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-page next mt_sm--30">
                                    <div className="inner">
                                        <a href={`${process.env.PUBLIC_URL + "/ccilu"}`}>
                                            <p>Next</p>
                                            <h3 className="heading heading-h3">CCILU <br/> SUSTAINABLE SHOE DESIGNS</h3>
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
