import React from 'react';
import {Container, Col} from "react-bootstrap";
import Button from "components/button";
import SliderSwiper from "components/swiper";
import {heroSliderConfig} from "utils/heroSliderConfig";
import sliderData from "data/slider/SliderAuthenticStudio.json";


// SliderAuthenticStudio: Hero slider for the "Authentic Studio" homepage
const SliderAuthenticStudio = () => {
    // Swiper slider settings, extending the heroSliderConfig
    const settings = {
        ...heroSliderConfig,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => `<span class="${className}">0${index + 1}</span>`
        }
    };

    return (
        <div className="hero-slider hero-slider--digital-agency">
            <SliderSwiper settings={settings}>
                {sliderData.map(slide => {
                    // Dynamically require the background image based on JSON
                    let bgUrl = '';
                    try {
                        bgUrl = require(`../../assets/img/revolution/${slide.bgImg}`);
                    } catch (e) {
                        // Optionally, log or handle missing image
                        bgUrl = '';
                    }
                    return (
                        <div className="swiper-slide" key={slide.id}>
                            <div
                                className="slide-inner slide-bg-image"
                                style={{ position: 'relative', backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
                            >
                                {/* Black overlay with 0.5 opacity */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.5)',
                                    zIndex: 1
                                }} />
                                <Container fluid style={{ position: 'relative', zIndex: 2 }}>
                                    <Col lg={8} className="mx-auto text-center">
                                        <div className="slide-content">
                                            <div data-swiper-parallax="300" className="slide-title">
                                                <h4>{slide.title}</h4>
                                                <h2>{slide.heading}</h2>
                                                <Button
                                                    type="link"
                                                    btnLink={slide.btnLink}
                                                    btnText={slide.btnText}
                                                    btnStyle="rounded"
                                                    size="sd"
                                                    color="white"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Container>
                            </div>
                        </div>
                    );
                })}
            </SliderSwiper>
        </div>
    );
};


export default SliderAuthenticStudio;
