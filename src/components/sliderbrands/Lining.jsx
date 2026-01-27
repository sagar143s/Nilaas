import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/img/portfolio/brands/Lining/1.jpg'
import Image2 from '../../assets/img/portfolio/brands/Lining/2.jpg'
import Image3 from '../../assets/img/portfolio/brands/Lining/3.jpg'
import Image4 from '../../assets/img/portfolio/brands/Lining/4.jpg'
import Image5 from '../../assets/img/portfolio/brands/Lining/5.jpg'
import Image6 from '../../assets/img/portfolio/brands/Lining/6.jpg'
import Image7 from '../../assets/img/portfolio/brands/Lining/7.jpg'
import './common.css'

const AnotherSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='lining-slider-wrapper'>
      <Slider {...settings}>
        <div className='sliderimage'><img src={Image1} alt="Lining 1" /></div>
        <div className='sliderimage'><img src={Image2} alt="Lining 2" /></div>
        <div className='sliderimage'><img src={Image3} alt="Lining 3" /></div>
        <div className='sliderimage'><img src={Image4} alt="Lining 4" /></div>
        <div className='sliderimage'><img src={Image5} alt="Lining 5" /></div>
        <div className='sliderimage'><img src={Image6} alt="Lining 6" /></div>
        <div className='sliderimage'><img src={Image7} alt="Lining 7" /></div>
      </Slider>
    </div>
  );
}

export default AnotherSlider;
