import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from 'react-bootstrap';

import Image1 from '../../../assets/images/about/1.jpg';
import Image2 from '../../../assets/images/about/2.jpg';
import Image3 from '../../../assets/images/about/3.jpg';
import Image4 from '../../../assets/images/about/4.jpg';
import Image5 from '../../../assets/images/about/5.jpg';
import Image6 from '../../../assets/images/about/6.jpg';

const Page = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
        {
            breakpoint: 108,
            settings: {
              slidesToShow: 6,
            },
          },
        {
            breakpoint: 108,
            settings: {
              slidesToShow: 5,
            },
          },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container style={{padding:"50px 0"}}>
      <Slider {...settings}>
        <img src={Image1} alt="Image 1" style={{ maxWidth: '180px' }} />
        <img src={Image4} alt="Image 2" style={{ maxWidth: '180px' }} />
        <img src={Image5} alt="Image 3" style={{ maxWidth: '180px' }} />
        <img src={Image6} alt="Image 4" style={{ maxWidth: '180px' }} />
        <img src={Image3} alt="Image 5" style={{ maxWidth: '180px' }} />
        <img src={Image2} alt="Image 6" style={{ maxWidth: '180px' }} />
      </Slider>
    </Container>
  );
};

export default Page;