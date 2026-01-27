import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/img/portfolio/brands/ccilu/1.jpg'
import Image2 from '../../assets/img/portfolio/brands/ccilu/2.jpg'
import Image3 from '../../assets/img/portfolio/brands/ccilu/3.jpg'
import Image4 from '../../assets/img/portfolio/brands/ccilu/4.jpg'
import Image5 from '../../assets/img/portfolio/brands/ccilu/5.jpg'
import Image6 from '../../assets/img/portfolio/brands/ccilu/6.jpg'
import Image7 from '../../assets/img/portfolio/brands/ccilu/7.jpg'
import './common.css'

const AnotherSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        <div className='sliderimage'><img src={Image1} alt="Ccilu 1" /></div>
        <div className='sliderimage'><img src={Image2}alt="Ccilu 2" /></div>
        <div className='sliderimage'><img src={Image3} alt="Ccilu 3" /></div>
        <div className='sliderimage'><img src={Image4} alt="Ccilu 4" /></div>
        <div className='sliderimage'><img src={Image5} alt="Ccilu 5" /></div>
        <div className='sliderimage'><img src={Image6}alt="Ccilu 6" /></div>
        <div className='sliderimage'><img src={Image7} alt="Ccilu 7" /></div>

      </Slider>
    </div>
  );
}

export default AnotherSlider;
